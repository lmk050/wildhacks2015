package mk.wildhacks2015.resources;

import org.restlet.ext.json.JsonRepresentation;
import org.restlet.resource.Get;
import org.restlet.resource.ServerResource;

public class SearchResource extends ServerResource {
	@Get("json")
	public JsonRepresentation represent() {
		 String kw=getQuery().getValues("userId");
		 return new JsonRepresentation("{\"firstName\": \"John\",\"lastName\": \"Smith\",\"isAlive\": true}");
	}
}