/*:
	@include:
		{
		}
	@end-include

	@module-documentation:

	@end-module-documentation

	@module-configuration:
		{
			"fileName": "class-descriptors.js",
			"moduleName": "classDescriptors",
			"className": "Descriptors",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true,
			"isClass": true
		}
	@end-module-configuration

	@export:
		{
		}
	@end-export
*/
Descriptors = function Descriptors( entity, key ){
	if( this instanceof Descriptors ){
		this.initialize( entity, key );
		this.construct( );
	}else{
		return new Descriptors( entity, key );
	}
};

Descriptors.prototype.initialize = function initialize( entity, key ){
	this.entity = entity;
	this.key = key;
};

Descriptors.prototype.construct = function construct( ){

};

Descriptors.prototype.enableEnumerable = function enableEnumerable( ){

};

Descriptors.prototype.disableEnumerable = function disableEnumerable( ){

};

Descriptors.prototype.enableConfigurable = function enableConfigurable( ){

};

Descriptors.prototype.disableConfigurable = function disableConfigurable( ){

};

Descriptors.prototype.enableWritable = function enableWritable( ){

};

Descriptors.prototype.disableWritable = function disableWritable( ){

};

Descriptors.prototype.updateValue = function updateValue( value ){

};

Descriptors.prototype.updateAccessor = function updateAccessor( accessor ){

};

Descriptors.prototype.updateMutator = function updateMutator( mutator ){

};