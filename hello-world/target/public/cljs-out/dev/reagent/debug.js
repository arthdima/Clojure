// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__8531__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8532__i = 0, G__8532__a = new Array(arguments.length -  0);
while (G__8532__i < G__8532__a.length) {G__8532__a[G__8532__i] = arguments[G__8532__i + 0]; ++G__8532__i;}
  args = new cljs.core.IndexedSeq(G__8532__a,0,null);
} 
return G__8531__delegate.call(this,args);};
G__8531.cljs$lang$maxFixedArity = 0;
G__8531.cljs$lang$applyTo = (function (arglist__8533){
var args = cljs.core.seq(arglist__8533);
return G__8531__delegate(args);
});
G__8531.cljs$core$IFn$_invoke$arity$variadic = G__8531__delegate;
return G__8531;
})()
);

(o.error = (function() { 
var G__8534__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8535__i = 0, G__8535__a = new Array(arguments.length -  0);
while (G__8535__i < G__8535__a.length) {G__8535__a[G__8535__i] = arguments[G__8535__i + 0]; ++G__8535__i;}
  args = new cljs.core.IndexedSeq(G__8535__a,0,null);
} 
return G__8534__delegate.call(this,args);};
G__8534.cljs$lang$maxFixedArity = 0;
G__8534.cljs$lang$applyTo = (function (arglist__8536){
var args = cljs.core.seq(arglist__8536);
return G__8534__delegate(args);
});
G__8534.cljs$core$IFn$_invoke$arity$variadic = G__8534__delegate;
return G__8534;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
