package mk.wildhacks2015.resources;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.restlet.Client;
import org.restlet.Context;
import org.restlet.data.Protocol;
import org.restlet.data.Reference;
import org.restlet.representation.StringRepresentation;
import org.restlet.resource.ClientResource;
import org.restlet.resource.Get;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

public class SearchResource extends ServerResource {
	final private  String TREND_URL="http://www.google.com/trends/fetchComponent?q=%s&cid=TIMESERIES_GRAPH_0&export=3";
	final private  String SEARCH_URL ="http://api.nytimes.com/svc/search/v2/articlesearch.json?q=%s&begin_date=%s&end_date=%s&api-key=%s";
	final private  String SEARCH_KEY="bd0a99fdeeea6c231f5704f947b361f5%3A9%3A69615058";
	final private  String NEW_DATE="new Date(";
	final private  int WEIGHT=15;
	private static String lastKW=null;
	private static String lastResponse=null;
	
	@Get("json")
	public StringRepresentation represent() throws ResourceException, IOException {
		try{
			  String kw=getQuery().getValues("q");
			  if(!kw.equalsIgnoreCase(lastKW))
			  {
				  String response = trend(kw);
				  lastKW = kw;
				  lastResponse = response;
			  }
			  return new StringRepresentation(lastResponse);
			}
			catch(Exception e)
			{
				return new StringRepresentation(e.getMessage());
		
			}
	}
	
	public static void main(String[] args) throws ResourceException, IOException, JSONException {
		SearchResource sr = new SearchResource();
		System.out.println(sr.trend("isis"));
	}
	
	protected  String trend(String kw) throws ResourceException, IOException, JSONException
	{
		HashMap<Integer,Object[]> hm= new HashMap<Integer,Object[]>();
		Client client = new Client(new Context(), Protocol.HTTP);
		ClientResource clientResource = new ClientResource(String.format(TREND_URL, kw));
		clientResource.setNext(client);
		String responseStr= clientResource.get().getText();
		System.out.println(responseStr);
		int index=responseStr.indexOf(NEW_DATE);
		int i = 1;
		while(index>0)
		{
			responseStr=responseStr.substring(index+NEW_DATE.length(),responseStr.length());
			String date= responseStr.substring(0, responseStr.indexOf(")"));
			index = responseStr.indexOf("\"v\":");
			responseStr=responseStr.substring(index+4,responseStr.length());
			String vol= responseStr.substring(0,responseStr.indexOf(","));
			hm.put(i++, new Object[]{date, Double.valueOf(vol)});
			index=responseStr.indexOf(NEW_DATE);
		}
		ArrayList<Integer> al = new ArrayList<Integer>();
		double previous = 0;
		double cumulatedDiff=0;
		String previousDate=null;
		for(int key: hm.keySet())
		{
			String date = (String)hm.get(key)[0];
			double vol = (double)hm.get(key)[1];
			if((vol-previous) * cumulatedDiff < 1)
			{
				if( vol-previous<0 && cumulatedDiff>=WEIGHT)
					al.add(key-1);
				cumulatedDiff = vol-previous;
			}
			else
				cumulatedDiff += (vol-previous);
			previousDate=date;
			previous=vol;		
		}
		if(!hm.isEmpty())
			al.add(hm.size());

		StringBuilder sb= new StringBuilder();
		sb.append("{");
		for(int key: hm.keySet())
		{
			String date = (String)hm.get(key)[0];
			double vol = (double)hm.get(key)[1];
			if(key>1)
				sb.append(",");
			sb.append("\""+ key +"\"");
			sb.append(":{");
			String[] dates = date.split(",");
			sb.append("\"year\":"+dates[0]);
			sb.append(",\"month\":"+dates[1]);
			sb.append(",\"day\":"+dates[2]);
			sb.append(",\"v\":"+vol);
			sb.append(",\"isPeak\":"+ (al.contains(key)?"true":"false"));
			if(al.contains(key))
				sb.append(",\"docs\":"+ search(kw, Integer.valueOf(dates[0]),Integer.valueOf(dates[1])).getJSONArray("docs").toString());
			sb.append("}");		
			
		}
		sb.append("}");

		return sb.toString();
	}
	
	protected  JSONObject search(String kw, int year, int month) throws ResourceException, IOException, JSONException
	{
		month+=1;
		String dateStr=String.valueOf(year)+String.valueOf(month<10?"0"+month:month);	
		Client client = new Client(new Context(), Protocol.HTTP);
		ClientResource clientResource = new ClientResource(new Reference(String.format(SEARCH_URL, kw, dateStr+"01", dateStr+"30",SEARCH_KEY)));
		clientResource.setNext(client);
		String responseStr= clientResource.get().getText();
		//System.out.println(responseStr);
		JSONObject jsonObj = new JSONObject(responseStr);
		JSONArray jsonArr=jsonObj.getJSONObject("response").getJSONArray("docs");
		JSONArray newJsonArr=new JSONArray();
		for(int i=0, j=0; i<jsonArr.length() && j<3;i++)
		{
			JSONObject jsonObject = jsonArr.getJSONObject(i);
			int mediaLength=jsonObject.getJSONArray("multimedia").length();
			if(mediaLength==0 && jsonArr.length()-i>3)
				continue;
			JSONObject newJson= new JSONObject();
			newJson.put("url",jsonObject.getString("web_url"));
			newJson.put("headline",jsonObject.getJSONObject("headline").get("main"));
			newJson.put("imageURL",mediaLength>0?jsonObject.getJSONArray("multimedia").getJSONObject(mediaLength>2?1:0).getString("url"):new JSONArray());
			newJsonArr.put(newJson);
			j++;
			
		}
		return new JSONObject().put("docs",newJsonArr);
	}
}