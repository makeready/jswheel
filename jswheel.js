export default function () {
		// public:
			// jsWheel({ args })  - full setup/start
			// jsWheel()          - status report, should work even on first run
			// jsWheel(domNode)   - initialize/rebind matrix within specified node
			// jsWheel($selector) - same as above - would need jquery dependency? 
			// jsWheel.list(list) - sets/resets list if array, baseUrl if string
			// jsWheel.benchmark()
			// jsWheel.items()    - items and their statuses
			
		// arguments:

			// item height
			// item width

			// list url/paging (or list itself if array)
			// counting strategy (optional) - a function that takes a prevNum and returns a nextNum. default: function(a){return a++;}
			// list (buffer length and/or load time)

			// (buffer height and/or load time) - providing only one will estimate and auto-set the other
			// ring (literal list only) / linear
			// momentum
			// // maximum force
			// // force factor
			// adaptive buffer height (list and/or item)
			// adapt buffer to momentum/direction
			// item timeout time

			// callbacks: success/fail/timeout/typical promise stuff

		// formats:
			//  list:
				// 	literal:
				// 		[item, item, item]
				// 	async:
				//	 	{ 
				//	   	 items:  [item, item, item], 
	      //		   nextListUrl: "http://www.example.com",
	      //		   prevListUrl: "http://www.example.com"
	      // 		}

			// item: load html from url if string, execute function on item div if function

			// cell:
				// index (internal)
				// mode: script/remote html/remote json + script
				// instructions: {
				//	 instructions.url and/or instructions.onLoad depending on mode
				// }
				// load (not set via user args): function that makes ajax call and/or executes script
				// status:
					// empty     - cell exists and doesn't have instructions
					// waiting   - cell has instructions but no content
					// queued    - cell has entered the buffer
					// loading   - cell is executing its instructions
					// ready     - cell has completed its instructions and presumably contains dom content
					// visible   - cell is in viewport
					// resetting - cell has left the buffer and is resetting its content
				// last load time
}
