class HashTable {
    data = null;

    constructor( size ){
        this.data = new Array( size );
    }

    // User for demo purpouses only
    exampleHashMethod( key ) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set( key, value ) {
        // Get hashed address
        const address = this.exampleHashMethod( key );

        // Check for previously created bucket
        let bucket  = this.data[address];

        // Create bucket if not exists
        if( !bucket ) {
            this.data[address] = [];
            bucket = this.data[address]
        }

        const previousData = this._findInBucket( bucket, key );

        // Update the old value if not exist yet
        if( previousData )
            previousData[1] = value

        // Create as new if dont
        else
            bucket.push([key, value]);

    }

    get( neddleKey ) {

        // Get hashed address by same method as setted
        const address = this.exampleHashMethod( neddleKey );

        // Get the storage bucket for this key
        const bucket  = this.data[address];

        return this._findInBucket( bucket, neddleKey )

    }


    // Filters the bucket elements by given key (neddle)
    _findInBucket( bucket, neddle ) {
        return bucket.filter( ([key, value]) => key === neddle )[0] || undefined;
    }


}

const myHashTable = new HashTable(20);

myHashTable.set( 'Lion', '🦁' )
myHashTable.set( 'Pig', '😱' )
myHashTable.set( 'Monkey', '🙉' )
myHashTable.set( 'Sheep', '🐑' )
myHashTable.set( 'Pig', '🐷' )

// Visual feedback
console.log(myHashTable)

// Sheep & lion colision is handled
console.log(myHashTable.get( 'Lion' ))
console.log(myHashTable.get( 'Sheep' ))