(function ($) {
  var tag_helper = {
    tag_options: function (opts) {
      var attr = [],
          output = '',
          self = this;

      if (!$.isEmptyObject(opts)) {
        $.each(opts, function (k, v) {
          var names = k.split(/(\s|\u00A0)+/),
              i = names.length,
              name;
          if (i > 1) {
            for (; i > 1; i -= 1) {
              name = $.trim(names.shift());
              if (name) {
                attr.push(name);
              }
            }
          }
          attr.push(names[0] + '="' +
            self.checkPlain(v) +
            '"');
        });
        output = ' ' + attr.join(' ');
      }
      return output;
    },

    content_tag: function (name, content, options) {
      var attrs = !$.isEmptyObject(options) ?
            this.tag_options(options) :
            "";
      return "<" + name + attrs + ">" + content + "</" + name + ">";
    },

    checkPlain : function (text) {
      return text.replace(/["&]/g, function (match) {
        return match === '"' ? '&quot;' : '&amp;';
      });
    }
  };

  $.extend($, {
    t: function () {
      return $($.tag.apply($, arguments));
    },

    tag: function (tag_type, content, options, block) {
      if (!$.isEmptyObject) {
        throw new Error('jQuery 1.4 is needed for $.tag');
      }

      if (!$.isFunction(block)) {
        block = $.isFunction(arguments[2]) ?
          arguments[2] :
          ($.isFunction(arguments[1]) ? arguments[1] : $.noop());
      }
      if (!$.isPlainObject(options)) {
        options = $.isPlainObject(arguments[1]) ? arguments[1] : {};
      }
      if (typeof(content) !== "string") {
        content = '';
      }

      if (arguments.length > 4 || arguments.length < 1) {
        return "";
      }
      if (block) {
        content += block.call();
      }

      return tag_helper.content_tag(tag_type, content, options);
    }
  });
}(jQuery));
