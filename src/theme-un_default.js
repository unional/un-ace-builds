/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define('ace/theme/un_default', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-un-default";
exports.cssText = ".ace-un-default .ace_gutter {\
background: #1a1a1a;\
color: #DEDEDE\
}\
.ace-un-default .ace_print-margin {\
width: 1px;\
background: #1a1a1a\
}\
.ace-un-default {\
background-color: #000000;\
color: #DEDEDE\
}\
.ace-un-default .ace_cursor {\
color: #9F9F9F\
}\
.ace-un-default .ace_marker-layer .ace_selection {\
background: #424242\
}\
.ace-un-default.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #000000;\
border-radius: 2px\
}\
.ace-un-default .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-un-default .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #888888\
}\
.ace-un-default .ace_marker-layer .ace_highlight {\
border: 1px solid rgb(110, 119, 0);\
border-bottom: 0;\
box-shadow: inset 0 -1px rgb(110, 119, 0);\
margin: -1px 0 0 -1px;\
background: rgba(255, 235, 0, 0.1);\
}\
.ace-un-default .ace_marker-layer .ace_active-line {\
background: #2A2A2A\
}\
.ace-un-default .ace_gutter-active-line {\
background-color: #2A2A2A\
}\
.ace-un-default .ace_stack {\
background-color: rgb(66, 90, 44)\
}\
.ace-un-default .ace_marker-layer .ace_selected-word {\
border: 1px solid #888888\
}\
.ace-un-default .ace_invisible {\
color: #343434\
}\
.ace-un-default .ace_keyword,\
.ace-un-default .ace_meta,\
.ace-un-default .ace_storage,\
.ace-un-default .ace_storage.ace_type,\
.ace-un-default .ace_support.ace_type {\
color: #C397D8\
}\
.ace-un-default .ace_keyword.ace_operator {\
color: #70C0B1\
}\
.ace-un-default .ace_constant.ace_character,\
.ace-un-default .ace_constant.ace_language,\
.ace-un-default .ace_constant.ace_numeric,\
.ace-un-default .ace_keyword.ace_other.ace_unit,\
.ace-un-default .ace_support.ace_constant,\
.ace-un-default .ace_variable.ace_parameter {\
color: #E78C45\
}\
.ace-un-default .ace_constant.ace_other {\
color: #EEEEEE\
}\
.ace-un-default .ace_invalid {\
color: #CED2CF;\
background-color: #DF5F5F\
}\
.ace-un-default .ace_invalid.ace_deprecated {\
color: #CED2CF;\
background-color: #B798BF\
}\
.ace-un-default .ace_fold {\
background-color: #7AA6DA;\
border-color: #DEDEDE\
}\
.ace-un-default .ace_entity.ace_name.ace_function,\
.ace-un-default .ace_support.ace_function,\
.ace-un-default .ace_variable {\
color: #7AA6DA\
}\
.ace-un-default .ace_support.ace_class,\
.ace-un-default .ace_support.ace_type {\
color: #E7C547\
}\
.ace-un-default .ace_heading,\
.ace-un-default .ace_markup.ace_heading,\
.ace-un-default .ace_string {\
color: #B9CA4A\
}\
.ace-un-default .ace_entity.ace_name.ace_tag,\
.ace-un-default .ace_entity.ace_other.ace_attribute-name,\
.ace-un-default .ace_meta.ace_tag,\
.ace-un-default .ace_string.ace_regexp,\
.ace-un-default .ace_variable {\
color: #D54E53\
}\
.ace-un-default .ace_comment {\
color: #969896\
}\
.ace-un-default .ace_c9searchresults.ace_keyword {\
color: #C2C280;\
}\
.ace-un-default .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
