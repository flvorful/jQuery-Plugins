jQuery Easy HTML Tag: Docs
=========

EasyHTMLTags documentation.


.tag( arguments ) Returns: [String]
--------


**Description:** Creates a tag from the arguments.

*   #### .tag( tag )
    **`tag:`** An empty tag element.

*   #### .tag( tag, content )
    **`tag:`** The tag element.
    
    **`content:`** The content for the tag.

*   #### .tag( tag, content, attr )
    **`tag:`** The tag element.
    
    **`content:`** The content for the tag.
    
    **`attr:`** A hash with the attributes for your tag.

*   #### .tag( tag, content, attr, function )

    **`tag:`** The tag element.

    **`content:`** The content for the tag.

    **`attr:`** A hash with the attributes for your tag.

    **`function:`** A callback that can return more HTML to allow easy nesting (see examples).

*   #### .tag( tag, attr, function )

    **`tag:`** The tag element.

    **`attr:`** A hash with the attributes for your tag.

    **`function:`** A callback that can return more HTML to allow easy nesting (see examples).

*   #### .tag( tag, function )

    **`tag:`** The tag element.

    **`function:`** A callback that can return more HTML to allow easy nesting (see examples).



#### Examples: Creates HTML in a variety of ways.
```javascript
$.tag("li")
# =>  "<li></li>"

$.tag("li", "some content")
# =>  "<li>some content</li>"

$.tag("li", "some content", { class: "my_class", id: "special_id"})
# =>  "<li class="my_class" id="special_id">some content</li>"

$.tag("li", "some content", { class: "my_class", id: "special_id"}, function() { return $.tag("span", "some extra stuff")})
# =>  "<li class="my_class" id="special_id">some content<span>some extra stuff</span></li>"

$.tag("li", { class: "my_class", id: "special_id"}, function() { return $.tag("span", "some extra stuff")})
# => "<li class="my_class" id="special_id"><span>some extra stuff</span></li>"

$.tag("li", function() { return $.tag("span", "some extra stuff")})
# =>  "<li><span>some extra stuff</span></li>"
```
        	

* * *


## .t( arguments ) Jquery Object: [String](http://docs.jquery.com/Types#jQuery)

This method is a wrapper around `.tag()` that returns a jQuery object instead of a String.  All arguments are identical

