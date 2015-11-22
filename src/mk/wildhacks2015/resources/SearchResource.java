package mk.wildhacks2015.resources;

import java.io.IOException;
import org.restlet.Context;
import org.restlet.representation.StringRepresentation;
import org.restlet.resource.ClientResource;
import org.restlet.resource.Get;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

public class SearchResource extends ServerResource {
	final private  String SEARCH_URL="http://www.google.com/trends/fetchComponent?q=%s&cid=TIMESERIES_GRAPH_0&export=3";
	final private  String NEW_DATE="new Date(";
	@Get("json")
	public StringRepresentation represent() throws ResourceException, IOException {
		 String kw=getQuery().getValues("q");
		 return new StringRepresentation(search(kw));
	}
	
//	public static void main(String[] args) throws ResourceException, IOException, JSONException {
//		search("us");
//	}
	
	protected  String search(String kw) throws ResourceException, IOException
	{

		Context context = new Context();
		ClientResource resource = new ClientResource(context,String.format(SEARCH_URL, kw));
		String responseStr= resource.get().getText();
		System.out.println(responseStr);
		int index=responseStr.indexOf(NEW_DATE);
		int i=1;
		StringBuilder sb= new StringBuilder();
		sb.append("{");
		while(index>0)
		{
			if(i>1)
				sb.append(",");
			sb.append(i++);
			sb.append(",{");
			responseStr=responseStr.substring(index+NEW_DATE.length(),responseStr.length());
			String date= responseStr.substring(0, responseStr.indexOf(")"));
			index = responseStr.indexOf("\"v\":");
			responseStr=responseStr.substring(index+4,responseStr.length());
			String vol= responseStr.substring(0,responseStr.indexOf(","));
			String[] dates = date.split(",");
			sb.append("\"year\":"+dates[0]);
			sb.append(",\"month\":"+dates[1]);
			sb.append(",\"day\":"+dates[2]);
			sb.append(",\"v\":"+vol);
			sb.append("}");		
			index=responseStr.indexOf(NEW_DATE);
		}
		sb.append("}");

		return sb.toString();
	}
}