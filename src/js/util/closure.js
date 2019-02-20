export default function() {
	var SplitQueryString = (function() {
		var queryString = location.search;
		var array = [];
		return {
			toObj: function() {
				var queries = queryString.slice(1).split('&');
				var results = {};
				for(var i = 0; i < queries.length; i++) {
					var query = queries[i].split('=');
					var key = query[0];
					var val = query[1];
					results[key] = val
				}
				return results
			},
			toArray: function() {
				var queries = queryString.slice(1).split('&');
				for(var i = 0; i < queries.length; i++) {
					var query = queries[i].split('=');
					var val = query[1];
					array.push(val);
				}
				return array;
			}
		}
	})();

	// ex: URLがhttp://example.com?hoge=hogehogeの場合
	console.log(SplitQueryString.toArray());
	SplitQueryString.toObj() // {hoge: "hogehoge"}
}