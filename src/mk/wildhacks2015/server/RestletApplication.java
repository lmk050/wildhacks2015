package mk.wildhacks2015.server;

import mk.wildhacks2015.resources.SearchResource;

import org.restlet.Application;
import org.restlet.Restlet;
import org.restlet.routing.Router;

public class RestletApplication extends Application {
	/**
	* Creates a root Restlet that will receive all incoming calls.
	*/

	public synchronized Restlet createInboundRoot() {

	Router router = new Router(getContext());
		// Defines only one route
		router.attach("/search", SearchResource.class);
		return router;
	}
}