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

Descriptors.prototype.extractDescriptors = function extractDescriptors( ){
	/*:
		@method-documentation:
		@end-method-documentation

		@method-configuration:
			{
				"isPrivate": true
			}
		@end-method-configuration
	*/
	this.descriptors = Object.getOwnPropertyDescriptor( this.entity, this.key );
};

Descriptors.prototype.enableEnumerable = function enableEnumerable( ){
	/*:
		@method-documentation:

		@end-method-documentation
	*/
	this.extractDescriptors( );
	if( this.descriptors.enumerable ){
		return;
	}
	if( this.descriptors.configurable ){
		Object.defineProperty( this.entity, this.key, { "enumerable": true } );
	}else{
		this.enableConfigurable( );
		this.enableEnumerable( );
		this.disableConfigurable( );	
	}
};

Descriptors.prototype.disableEnumerable = function disableEnumerable( ){
	/*:
		@method-documentation:

		@end-method-documentation
	*/
	this.extractDescriptors( );
	if( !this.descriptors.enumerable ){
		return;
	}
	if( this.descriptors.configurable ){
		Object.defineProperty( this.entity, this.key, { "enumerable": false } );
	}else{
		this.enableConfigurable( );
		this.disableEnumerable( );
		this.disableConfigurable( );	
	}
};

Descriptors.prototype.enableConfigurable = function enableConfigurable( ){

};

Descriptors.prototype.disableConfigurable = function disableConfigurable( ){

};

Descriptors.prototype.enableWritable = function enableWritable( ){
	/*:
		@method-documentation:

		@end-method-documentation
	*/
	this.extractDescriptors( );
	if( this.descriptors.writable ){
		return;
	}
	if( this.descriptors.configurable ){
		Object.defineProperty( this.entity, this.key, { "writable": true } );
	}else{
		this.enableConfigurable( );
		this.enableWritable( );
		this.disableConfigurable( );	
	}
};

Descriptors.prototype.disableWritable = function disableWritable( ){
	/*:
		@method-documentation:

		@end-method-documentation
	*/
	this.extractDescriptors( );
	if( !this.descriptors.writable ){
		return;
	}
	if( this.descriptors.configurable ){
		Object.defineProperty( this.entity, this.key, { "writable": false } );
	}else{
		this.enableConfigurable( );
		this.disableWritable( );
		this.disableConfigurable( );	
	}
};

Descriptors.prototype.updateValue = function updateValue( value ){

};

Descriptors.prototype.updateAccessor = function updateAccessor( accessor ){

};

Descriptors.prototype.updateMutator = function updateMutator( mutator ){

};