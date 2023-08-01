// @ts-check

const webpage = {
    
    NAMESPACES: {
        svg: {
            url: 'http://www.w3.org/2000/svg',
            list: ['svg','circle','rect','line','path','text','g','use']
        },
        math: {
            url: 'http://www.w3.org/1998/Math/MathML',
            list: ['math','mi','mo','mn','mfrac','msup','msqrt']
        },
        xmlns( tagName ) {
            return this.svg.list.includes( tagName.toLowerCase() ) ? this.svg.url : this.math.list.includes( tagName.toLowerCase() ) && this.math.url;
        }
    },
    
    /**
     * @param { String } tagName - The HTML tag name for the element.
     * @param { Object } options - Object with various options for element creation.
     * @param { String } [options.className] - Element class name.
     * @param { HTMLElement } [options.innerChild] - Append this element as a child to the created element.
     * @param { Object } [options.listener] - Object with event listener configuration.
     * @param { String | [] } [options.listener.event] - Event type(s) to listen to. Can be a space-separated string or an array of event types.
     * @param { Function } [options.listener.handler] - Event handler function to be called when the event is triggered.
     * @param { {} } [options.attr] - Object with attributes to set on the element.
     * @param { String } [options.xmlns] - The XML namespace for the element, if applicable (optional).
     * @returns { HTMLElement } - The created HTML element.
     **/
    _createNode( tagName, options ) {
        
        options = options || {};
        
        const namespace = this.NAMESPACES;
        const xmlns = typeof options.xmlns === "string" && options.xmlns || namespace.xmlns( tagName );
        
        const element = xmlns
            ? document.createElementNS( xmlns, tagName )
            : document.createElement( tagName );
        
        const { attr, innerChild, listener, ...pointers } = options;
        
        if ( typeof attr === "object" ) {
            
            for ( let prop in attr ) {
                element.setAttribute( prop, attr[ prop ] )
            }
            
        }
        
        if ( typeof pointers === "object" ) {
            
            for ( let prop in pointers ) {
                element[ prop ] = pointers[ prop ]
            }
            
        }
        
        if ( typeof listener === "object" ) {
            
            const event = typeof listener.event === "string"
                ? listener.event.split(' ')
                : Array.isArray( listener.event ) && listener.event;
            
            typeof listener.handler === "function" && event && event.forEach( evt => {
                element.addEventListener( evt, function(e) {
                    listener.handler.call( this, e )
                })
            })
            
        }
        
        innerChild && innerChild.namespaceURI !== null && innerChild.tagName !== null && innerChild.appendChild( element );
        
        return element
        
    }

}
              
