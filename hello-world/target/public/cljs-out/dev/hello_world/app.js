// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('hello_world.app');
goog.require('cljs.core');
goog.require('reagent.dom');
hello_world.app.node$module$axios = require('axios');
hello_world.app.app = (function hello_world$app$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello, there yo yo yo"], null);
});
hello_world.app.render_app = (function hello_world$app$render_app(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.app.app], null),document.getElementById("hello_world_container"));
});
hello_world.app.re_render = (function hello_world$app$re_render(){
return hello_world.app.render_app.call(null);
});
if((typeof hello_world !== 'undefined') && (typeof hello_world.app !== 'undefined') && (typeof hello_world.app.init_app !== 'undefined')){
} else {
hello_world.app.init_app = (function (){
hello_world.app.render_app.call(null);

return true;
})()
;
}

//# sourceMappingURL=app.js.map
