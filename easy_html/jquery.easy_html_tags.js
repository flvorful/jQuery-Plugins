(function($){
	tag_helper = {
		
		tag_options: function(opts) {
			if (!$.isEmptyObject(opts)) {
				attr = []
				$.each(opts, function(k, v) {
					attr.push(k + "=\"" + v + "\"") 
				})
				return " " + attr.join(" ")
			};
			return ""
		},
		content_tag: function(name, content, options) {
			attrs = ""
			if (!$.isEmptyObject(options)) {
				attrs = tag_helper.tag_options(options)
			}
      return "<" + name + attrs + ">" + content + "</" + name + ">"
		}
	}
	$.t = function() {
		return $($.tag(arguments[0], arguments[1], arguments[2], arguments[3]))
	}
	$.tag = function() {
		if (!$.isEmptyObject)
			$.error( 'jQuery 1.4.2 is needed for $.tag' );
		
		if (arguments.length > 4 || arguments.length < 1) {
			return ""
		};
		var tag_type = arguments[0]
		var content = typeof(arguments[1]) == "string" ? arguments[1] : ""
		var opts = typeof(arguments[2]) == "object" ? arguments[2] : (typeof(arguments[1]) == "object" ? arguments[1] : {})
		var block = $.isFunction(arguments[3]) ? arguments[3] : ($.isFunction(arguments[2]) ? arguments[2] : undefined)
		if (block != undefined) {
			content += block.call()
		};
		return tag_helper.content_tag(tag_type, content, opts)
	};
})(jQuery);