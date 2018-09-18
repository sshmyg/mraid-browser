/* JS polifills */

/* Bind */
Function.prototype.bind=(function(){}).bind||function(b){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");}function c(){}var a=[].slice,f=a.call(arguments,1),e=this,d=function(){return e.apply(this instanceof c?this:b||window,f.concat(a.call(arguments)));};c.prototype=this.prototype;d.prototype=new c();return d;};
/* JSON */
"object"!==typeof JSON&&(JSON={});
(function(){function m(a){return 10>a?"0"+a:a}function t(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=u[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function q(a,l){var c,d,h,r,g=e,f,b=l[a];b&&"object"===typeof b&&"function"===typeof b.toJSON&&(b=b.toJSON(a));"function"===typeof k&&(b=k.call(l,a,b));switch(typeof b){case "string":return t(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);
case "object":if(!b)return"null";e+=n;f=[];if("[object Array]"===Object.prototype.toString.apply(b)){r=b.length;for(c=0;c<r;c+=1)f[c]=q(c,b)||"null";h=0===f.length?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(k&&"object"===typeof k)for(r=k.length,c=0;c<r;c+=1)"string"===typeof k[c]&&(d=k[c],(h=q(d,b))&&f.push(t(d)+(e?": ":":")+h));else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=q(d,b))&&f.push(t(d)+(e?": ":":")+h);h=0===f.length?"{}":e?"{\n"+e+f.join(",\n"+
e)+"\n"+g+"}":"{"+f.join(",")+"}";e=g;return h}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+m(this.getUTCMonth()+1)+"-"+m(this.getUTCDate())+"T"+m(this.getUTCHours())+":"+m(this.getUTCMinutes())+":"+m(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var s,p,e,n,u,k;"function"!==typeof JSON.stringify&&(p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
u={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(a,l,c){var d;n=e="";if("number"===typeof c)for(d=0;d<c;d+=1)n+=" ";else"string"===typeof c&&(n=c);if((k=l)&&"function"!==typeof l&&("object"!==typeof l||"number"!==typeof l.length))throw Error("JSON.stringify");return q("",{"":a})});"function"!==typeof JSON.parse&&(s=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(a,
e){function c(a,d){var g,f,b=a[d];if(b&&"object"===typeof b)for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),void 0!==f?b[g]=f:delete b[g]);return e.call(a,d,b)}var d;a=String(a);s.lastIndex=0;s.test(a)&&(a=a.replace(s,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=
eval("("+a+")"),"function"===typeof e?c({"":d},""):d;throw new SyntaxError("JSON.parse");})})();

(function() {
	'use strict';

	var isUrl = function(s) {
			var regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
			return regexp.test(s) || /html$/.test(s) || /.html\?/.test(s);
		},
		addClass = function(o, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
			if (re.test(o.className)) return;
			o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
		},
		removeClass = function(o, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
			o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
		},
		loadStyle = function(styleStr) {
			if (!styleStr) return false;

			var style = document.createElement('style');

			style.innerHTML = styleStr;

			document.getElementsByTagName('head')[0].appendChild(style);

			return true;
		},
		iframeHtml = function(iframe, html) {
			if (!iframe) return false;

			var target = iframe.contentWindow ? iframe.contentWindow.document : iframe.contentDocument;

			target.open();
			target.write(html);
			target.close();

			return true
		},
		CONTS = {
			version		: '0.3.11',
			SDKVersion	: '2.0',
			closeSrc	: 'https://rtb.adcamp.ru/mobile/static/images/frontend/close.png',
			closeStyle	: 'position: absolute; right: 0; top: 0; z-index: 3200000; height: auto; cursor: pointer;',
			iframeStyle	: '.adcamp-area {display: block; } .adcamp-area_full {position: fixed; left: 0 !important; top: 0 !important; right: 0 !important; bottom: 0 !important; margin: auto; z-index: 3200001; -webkit-backface-visibility: hidden; } .adcamp-area_standard {display: block; } .adcamp-area_standard_center {margin: 0 auto; } .adcamp-area_standard_right {margin: 0 0 0 auto; } .adcamp-area_float {position: fixed; z-index: 3200000; -webkit-backface-visibility: hidden; } .adcamp-area_float_animation {-webkit-transition: top .5s ease-in-out, bottom .5s ease-in-out; -moz-transition: top .5s ease-in-out, bottom .5s ease-in-out; -o-transition: top .5s ease-in-out, bottom .5s ease-in-out; transition: top .5s ease-in-out, bottom .5s ease-in-out; } .adcamp-area_valign-top {top: -9999px; } .adcamp-area_valign-bottom {bottom: -9999px; } .adcamp-area_halign-center {left: 0; right: 0; margin: auto; } .adcamp-area_halign-left {left: 0; } .adcamp-area_halign-right {right: 0; }'
		},
		/**
		 * Mraid
		 * @param {DOM Object} iframe
		 * @param {Object} [settings]
		 * @param {DOM Object} [settings.script] Script which start Mraid
		 * @param {DOM Object} [settings.autoResize] Resize iframe by default to iframe content size
		 */
		Mraid = function(iframe, settings) {
			this.iframe					= iframe;
			this.s						= settings || {};
			this.userSettings			= (window.adCampMraidConfig && window.adCampMraidConfig[settings.scriptId]) || {};
			this.state					= null;
			this.browser				= true;
			this.orientationProperties	= {
				allowOrientationChange	: false,
				forceOrientation		: 'none' //portrait|landscape|none
			};
			this.expandProperties = {
				width			: '100%',
				height			: '100%',
				useCustomClose	: false,
				isModal			: true
			};
			this.resizeProperties = {
				width				: 0,
				height				: 0,
				offsetX				: this.iframe.offsetLeft,
				offsetY				: this.iframe.offsetTop,
				customClosePosition	: 'top right',
				allowOffscreen		: false
			};
			this.states = {
				LOADING	: 'loading',
				DEFAULT	: 'default',
				EXPANDED: 'expanded',
				RESIZED	: 'resized',
				HIDDEN	: 'hidden'
			};

			this._changeState('loading', true);

			/* Default values */
			if (!this.s.valign) this.s.valign = 'top';
			if (!this.s.halign) this.s.halign = 'center';
			if (!this.s.bannerType) this.s.bannerType = 'standard';
			if (this.s.maxwidth > this.getScreenSize().width) this.s.maxwidth = this.getScreenSize().width; //if maxwidth > than screen width

			/* Init link manager */
			this.linkManager = new Mraid.LinkManager(this.s.Tracking);

			/* Start Mraid */
			this.initialize();
		};

	/**
	 * Render iframe
	 * @param {Object} config
	 * @param {String} config.html HTML or URL
	 * @param {Number} config.width
	 * @param {Number} config.height
	 * @param {String} config.scriptId Selector, insert before this element
	 * @param {Function} config.callback Fire when iframe is loaded and first argumet is this iframe
	 */
	Mraid.renderIframe = function(config) {
		config = config || {};

		var html			= config.html,
			iframeWidth		= config.width || '100%',
			iframeHeight	= config.height || '100%',
			insertBefore	= config.scriptId,
			iframe			= document.createElement('iframe'),
			success = function(e) {
				iframe.style.display = 'block';
				if (typeof config.callback === 'function') config.callback(iframe);
			},
			target, insertElem;

		if (!insertBefore) throw new Error('scriptId param require');

		insertElem				= document.getElementById(insertBefore);
		iframe.width			= iframeWidth;
		iframe.height			= iframeHeight;
		iframe.frameBorder		= 0;
		iframe.scrolling		= 'no';
		iframe.className		= 'adcamp-area';
		iframe.style.display	= 'none';

		iframe.setAttribute('data-id', config.scriptId);
		iframe = insertElem.parentNode.insertBefore(iframe, insertElem);
		iframe.addEventListener('load', success, false);

		if ( isUrl(html) ) iframe.src = html;
		else iframeHtml(iframe, html);

		return iframe;
	};

	/**
	 * Tracking link manager
	 * @param {Object} linksObj
	 * @example Tracking : {
				Impression : [],
				CompanionClickTracking : [],
				onVastLoad : [],
				firstQuartile : [],
				midpoint : [],
				thirdQuartile : [],
				complete : []
			}
	 */
	Mraid.LinkManager = function(linksObj) {
		var isLocalStorageSupport = 'localStorage' in window;

		this.o					= linksObj || {};
		this.addedCategory		= {};
		this.storageName		= 'adcampTracking';
		
		if (!isLocalStorageSupport) throw new Error('localStorage doesnt support');
	};

	Mraid.LinkManager.prototype.isStorageItem = function() {
		return !!localStorage.getItem(this.storageName);
	};

	/**
	 * Add Tracking to stack
	 * @param {String} category Tracking category (e.g. 'Impression')
	 */
	Mraid.LinkManager.prototype.add = function(category) {
		if (!this.o[category] || this.addedCategory[category] || (this.o[category] && !this.o[category].length)) return this;

		var linksAsStr = JSON.stringify(this.o[category]),
			tempStorage;

		/* Is this links already added */
		this.addedCategory[category] = true;

		if ( this.isStorageItem() ) {
			tempStorage	= localStorage.getItem(this.storageName);
			tempStorage	= tempStorage ? JSON.parse(tempStorage) : tempStorage;
			tempStorage	= tempStorage.concat(this.o[category]);
			linksAsStr	= JSON.stringify(tempStorage);
		}

		localStorage.setItem(this.storageName, linksAsStr);

		return this;
	};

	/**
	 * Remove all storage item
	 */
	Mraid.LinkManager.prototype.remove = function() {
		localStorage.removeItem(this.storageName);

		this.addedCategory = {};

		return this;
	};

	Mraid.LinkManager.prototype.save = function() {
		var links = localStorage.getItem(this.storageName);

		links = links ? JSON.parse(links) : links;

		if (!links || (links && !links.length)) return this;

		links.forEach(function(url) {
			(new Image()).src = url;
		});

		this.remove();

		return this;
	};


	/* MRAID browser */

	Mraid.prototype.initialize = function() {
		/* Load style */
		if (!window.parent.Mraid.iframeStyleReady) loadStyle(CONTS.iframeStyle);
		window.parent.Mraid.iframeStyleReady = true;

		this
			._bindEvents()
			._bannerStandardHandler() //main type 1
			._bannerFullHandler() //main type 2
			._bannerFloatHandler() //main type 3
			._autoUpdate()
			._autoClose()
			._skipParamHandler();

		this.linkManager.add('Impression').save();
		this.linkManager.add('onVastLoad').save();

		this.addEventListener('error', this._errorsHandler, this);
		this.addEventListener('ready', this._initializeIframe, this);

		return this;
	};

	Mraid.prototype.getVersion = function() {
		return CONTS.SDKVersion;
	};

	Mraid.prototype.getPlacementType = function() {
		if (this.s.placementType) return this.s.placementType;
		if ( this._isFull() ) return 'interstitial';
		return 'inline';
	};

	Mraid.prototype.addEventListener = function(eventName, callback, context) {
		if (!eventName || !callback) return this;
		if (typeof eventName === 'number') eventName = '' + eventName;

		var namesArr = eventName.split(' '),
			dataObj = {
				callback	: callback,
				context		: context
			};

		this._events = this._events || {};
		context = context || null;

		namesArr.forEach(function(name, i) {
			if (!this._events[name]) {
				this._events[name] = {
					callbacks : [dataObj]
				};
			} else {
				this._events[name].callbacks.push(dataObj);
			}
		}.bind(this));

		return this;
	};

	Mraid.prototype.removeEventListener = function(name, callback, context) {
		if (!this._events) return this;

		if (!name && !callback && !context) {
			this._events = {};
			return this;
		}

		if (name && !callback && !context) {
			delete this._events[name];
			return this;
		}

		var arr;

		Object.keys(this._events).forEach(function(key) {
			arr = this._events[key].callbacks;

			if (!arr || !arr.length) return this;

			arr.forEach(function(item, n) {
				if (callback && !context) {
					if (item && item.callback === callback) {
						arr.splice(n, 1);
						n--;
					}
				}
				if (!callback && context) {
					if (item && item.context === context) {
						arr.splice(n, 1);
						n--;
					}
				}

				if (callback && context) {
					if ( (item && item.callback === callback) && (item && item.context === context) ) {
						arr.splice(n, 1);
						n--;
					}
				}
			});

			if (!arr.length) delete this._events[key];
		}.bind(this));

		return this;
	};

	Mraid.prototype.trigger = function(eventName) {
		if (!this._events) return this;
		if (typeof eventName === 'number') eventName = '' + eventName;

		var args = Array.prototype.slice.call(arguments, 1) || [],
			namesArr = eventName.split(' '),
			allArgs, arr, arrAll;

		namesArr.forEach(function(name, i) {
			if (!this._events[name]) return this;

			arr		= this._events[name].callbacks;
			arrAll	= (this._events.all && this._events.all.callbacks) || [];
			allArgs	= args.slice();

			allArgs.unshift(name);

			if (!arr || !arr.length) return this;

			arr.forEach(function(item) {
				if (!item || typeof item.callback !== 'function') return true;

				item.callback.apply(item.context, args);

				//All
				arrAll.forEach(function(allItem) {
					allItem.callback.apply(allItem.context, allArgs);
				});
			});
		}.bind(this));

		return this;
	};

	/**
	 * Description
	 * @param {Boolean} state True == show, false = hide;
	 */
	Mraid.prototype.toggle = function(state) {
		var valign = this.s.valign;

		if ( this._isFloat() ) {
			if (valign !== 'center') this.iframe.style[valign] = state ? 0 : '-9999px';
			return this;
		}

		this.iframe.style.display = state ? 'block' : 'none';

		return this;
	};

	Mraid.prototype.destroy = function() {
		var script = document.getElementById(this.s.scriptId);

		if (this._unbindEvents) this._unbindEvents();

		this.iframe.parentNode.removeChild(this.iframe);
		if (script) script.parentNode.removeChild(script);

		this._changeState();

		this.iframe = null;

		return this;
	};

	/**
	 * Close means expanded to default state
	 */
	Mraid.prototype.close = function() {
		this.trigger('close');

		if ( this._isFull() ) {
			this.destroy();
			return this;
		}

		if (this.getState() === 'expanded') {
			this
				._compress()
				._autoResizeFloat()
				._changeState();

			if (!this.s.skip && this.s.skip !== 0) this._toggleCustomClose();

			return this;
		}

		this.destroy();

		return this;
	};

	Mraid.prototype.hide = function() {
		this.toggle();
		return this;
	};

	Mraid.prototype.show = function(time) {
		time = time || 0;

		if (!time) {
			this.toggle(true);
			return this;
		}

		setTimeout(function() {
			this.toggle(true);
		}.bind(this), time);

		return this;
	};

	Mraid.prototype.expand = function() {
		if (this.getState() === 'expanded') return this;

		var props = this.getExpandProperties();

		this._setMaxWidth('inherit');

		this.iframe.width = props.width;
		this.iframe.height = props.height;

		addClass(this.iframe, 'adcamp-area_full');

		/* Add and toggle close */
		if (!props.useCustomClose) this._addClose();
		if (this.iframeClose) this._toggleCustomClose(true);

		this._changeState('expanded');

		return this;
	};

	Mraid.prototype.getScreenSize = function() {
		return {
			width	: window.innerWidth,
			height	: window.innerHeight
		};
	};

	Mraid.prototype.getCurrentPosition = function() {
		return {
			x		: this.iframe.offsetLeft,
			y		: this.iframe.offsetTop,
			width	: this.iframe.clientWidth,
			height	: this.iframe.clientHeight
		};
	};

	/**
	 * Description
	 * @param {Object} obj Object with new params
	 */
	Mraid.prototype.setExpandProperties = function(obj) {
		return this._universalSetter('expandProperties', obj);
	};

	Mraid.prototype.setResizeProperties = function(obj) {
		return this._universalSetter('resizeProperties', obj);
	};

	Mraid.prototype.setOrientationProperties = function(obj) {
		return this._universalSetter('orientationProperties', obj);
	};

	Mraid.prototype.getExpandProperties = function() {
		return this.expandProperties;
	};

	Mraid.prototype.getResizeProperties = function() {
		return this.resizeProperties;
	};

	Mraid.prototype.getOrientationProperties = function() {
		return this.orientationProperties;
	};

	Mraid.prototype.isViewable = function() {
		return this.iframe.style.display !== 'none';
	};

	Mraid.prototype.open = function(url) {
		if (!url) return this;

		if ( !isUrl(url) ) window.location = url;
		else window.open(url, '_blank');

		this._onclickParamHandler();

		return this;
	};

	Mraid.prototype.getState = function() {
		return this.state;
	};

	Mraid.prototype.useCustomClose = function(state) {
		this.expandProperties.useCustomClose = state || false;

		if (state && this.iframeClose) this._toggleCustomClose();

		return this;
	};

	Mraid.prototype.resize = function(conf) {
		conf = conf || {};

		var props = this.getResizeProperties();
		
		this
			._setWidth(props.width)
			._setHeight(props.height);

		if (!conf.silent) {
			this._changeState('resized');
		}

		return this;
	};

	Mraid.prototype.refresh = function() {
		if (!this.s.scriptId) return false;

		var scriptEl	= document.getElementById(this.s.scriptId),
			parentEl	= scriptEl.parentNode,
			prevEl		= scriptEl.previousElementSibling,
			nextEl		= scriptEl.nextElementSibling,
			scriptSrc	= scriptEl.src,
			scriptId	= scriptEl.id,
			newScriptEl	= document.createElement('script');

		newScriptEl.id = scriptId;
		newScriptEl.src = scriptSrc;
		
		this.destroy();

		if (!nextEl) parentEl.appendChild(newScriptEl);
		else parentEl.insertBefore(newScriptEl, nextEl);

		return this;
	};

	/*  PRIVATE */
	Mraid.prototype._initializeIframe = function() {
		this._setBg();

		/* Set default black color for rollup */
		this.addEventListener('stateChange', function(state) {
			if (state === this.states.EXPANDED) this._setBg('#000');
			else this._setBg();
		}, this);
	};

	Mraid.prototype._setWidth = function(width) {
		width = width || this.s.maxwidth || this.s.width;

		this.iframe.width = width;

		this.setResizeProperties({
			width : width
		});

		return this
	};

	Mraid.prototype._setHeight = function(height) {
		height = height || this.s.height;

		this.iframe.height = height;

		this.setResizeProperties({
			height : height
		});

		return this;
	};

	Mraid.prototype._compress =  function() {
		removeClass(this.iframe, 'adcamp-area_full');

		this._autoResize();

		return this;
	};

	Mraid.prototype._bindEvents = function() {
		var fuSetHeight = this._onWindowResize.bind(this);

		if (this.s.upscale) window.addEventListener('resize', fuSetHeight, false);
		this._unbindEvents = function() {
			if (this.s.upscale) window.removeEventListener(window, 'resize', fuSetHeight);
		};

		//Iframe loaded
		this.iframe.addEventListener('load', function() {
			this.iframeDocument = this.iframe.contentWindow ? this.iframe.contentWindow.document : this.iframe.contentDocument;
			this._changeState('default').trigger('ready');
		}.bind(this), false);

		//Iframe error
		this.iframe.contentWindow.addEventListener('error', this._errorsHandler.bind(this));

		return this;
	};

	Mraid.prototype._onWindowResize = function() {
		if (this.getState() === 'expanded') {
			this.expand();
		} else {
			this
				._autoResize()
				._autoResizeFloat();
		}

		return this;
	};

	Mraid.prototype._setMaxWidth = function(value) {
		var maxWidth = value || this.s.maxwidth;

		if (!maxWidth) return this;

		if (typeof maxWidth === 'number') this.iframe.style.maxWidth = maxWidth + 'px';
		if (typeof maxWidth === 'string') this.iframe.style.maxWidth = maxWidth;

		return this;
	};

	Mraid.prototype._autoResize = function(w, h) {
		var optionWidth = this.s.upscale ? (this.s.maxwidth || this.s.width) : this.s.width,
			isFull = this._isFull(),
			resizeSize, height, width, temp;

		if (isFull) optionWidth = '100%';

		if (this.s.upscale && !isFull) this._setMaxWidth();
		if (this.s.upscale && isFull) this._setMaxWidth(optionWidth);

		/* Set real width */
		if ((window.innerWidth < optionWidth) && this.s.upscale) this._setWidth('100%');
		else this._setWidth(optionWidth);

		/* Set real height */
		if (!h && this.s.maxwidth) {
			//Convert % max width to number
			if (/%/.test(this.s.maxwidth)) {
				this.s.maxwidth = parseInt(this.s.maxwidth, 10) / 100 * window.innerWidth;
			}

			//Round height (as chrome round image proportion .5 to floor)
			h = this.s.height / this.s.width * this.s.maxwidth;
			temp = h - Math.floor(h);
			
			if (temp <= 0.5) h = Math.floor(h);
			else h = Math.ceil(h);
		}
		
		this._setHeight(h);

		resizeSize	= this.getResizeProperties();
		height		= (resizeSize.height !== this.iframe.height) ? this.iframe.clientHeight : resizeSize.height;
		width		= (resizeSize.width !== this.iframe.width) ? this.iframe.clientWidth : resizeSize.width;

		this.setResizeProperties({
			height	: height,
			width	: width
		});

		return this;
	};

	Mraid.prototype._changeState = function(state, silent) {
		state = state || this.states.DEFAULT;

		this.state = this.states[state.toUpperCase()];

		if (!this.state) this.state = this.states.DEFAULT;

		if (!silent) this.trigger('stateChange', this.state);

		return this;
	};

	Mraid.prototype._onclickParamHandler = function() {
		this.linkManager.add('CompanionClickTracking').save();

		if (this.s.onclick === 'close') this.close();
		else if (this.s.onclick === 'refresh') this.refresh();

		return this;
	};

	Mraid.prototype._skipParamHandler = function() {
		var skip = this.s.skip;

		if (skip !== 0 && !skip) return this;

		if (skip && typeof skip === 'number') {
			setTimeout(this._addClose.bind(this), skip * 1000);
		}

		if (skip === 0) this._addClose();

		return this;
	};

	Mraid.prototype._addClose = function() {
		if (!this.iframe || this.iframeClose) return this;

		var ifrmaeDocument		= this.iframe.contentWindow.document,
			iframeBody			= ifrmaeDocument.body,
			elClose				= ifrmaeDocument.createElement('img'),
			elCloseWidth		= 7;

		elClose.src				= CONTS.closeSrc;
		elClose.style.cssText	= CONTS.closeStyle + 'width: '+ elCloseWidth +'%;';

		this.iframeClose = iframeBody.appendChild(elClose);

		/* Bind click to custom close */
		this.iframeClose.addEventListener('click', this.close.bind(this), false);

		return this;
	};

	Mraid.prototype._toggleCustomClose = function(state) {
		if (!this.iframeClose) return this;

		this.iframeClose.style.display = state ? 'block' : 'none';

		return this;
	};

	Mraid.prototype._universalSetter = function(prop, obj) {
		var key;
		for (key in obj) {
			if (!obj.hasOwnProperty(key)) continue;
			this[prop][key] = obj[key];
		}

		return this;
	};

	Mraid.prototype._autoUpdate = function() {
		var autoUpdate = this.s.autoupdate,
			update, closestElem;

		if (!autoUpdate || typeof autoUpdate !== 'number') return this;
		
		if (autoUpdate < 3) autoUpdate = 3;

		setTimeout(this.refresh.bind(this), autoUpdate * 1000);

		return this;
	};

	Mraid.prototype._autoClose = function() {
		var destroy = this.s.autoclose;

		if (!destroy || (destroy && typeof destroy !== 'number')) return this;

		setTimeout(this.destroy.bind(this), destroy * 1000);

		return this;
	};

	Mraid.prototype._setBg = function(bg) {
		bg = bg || this.s.bgcolor;

		if (!bg || !this.iframeDocument) return this;

		this.iframeDocument.body.style.backgroundColor = bg;

		return this;
	};

	/* Standard banner type */
	Mraid.prototype._isStandard = function() {
		return !this._isFloat() && !this._isFull();
	};

	Mraid.prototype._bannerStandardHandler = function() {
		if ( !this._isStandard() ) return this;

		/* Auto resize */
		this.addEventListener('ready', this._autoResize.bind(this));

		/* Vertical align */
		addClass(this.iframe, 'adcamp-area_standard adcamp-area_standard_' + this.s.halign);

		return this;
	};

	/* Full banner type */
	Mraid.prototype._isFull = function() {
		return this.s.bannerType === 'full';
	};

	Mraid.prototype._bannerFullHandler = function() {
		if ( !this._isFull() ) return this;

		this.addEventListener('ready', this.expand, this);

		return this;
	};

	/* Float banner type */
	Mraid.prototype._isFloat = function() {
		return this.s.bannerType.indexOf('float') !== -1;
	};

	Mraid.prototype._autoResizeFloat = function() {
		if ( !this._isFloat() ) return this;

		var winWidth = window.innerWidth,
			width = this.s.maxwidth || this.s.width;

		if (width > winWidth) {
			this._setWidth('100%');
			this.iframe.style.left = 0;
		} else {
			this
				._autoResize()
				._alignFloatBanner('h')
				._alignFloatBanner('v');
		}

		return this;
	};

	/**
	 * Description
	 * @param {String} align 'v', 'h';
	 * @defaults 'v'
	 */
	Mraid.prototype._alignFloatBanner = function(dir) {
		if ( !this._isFloat() ) return this;

		dir = dir || 'v';

		var align = this.s[dir + 'align'],
			windowSize, position, clientSize;

		if (dir === 'v') {
			position = 'top';
			clientSize = 'clientHeight';
			windowSize = window.innerHeight;
		} else {
			position = 'left';
			clientSize = 'clientWidth';
			windowSize = window.innerWidth;
		}

		addClass(this.iframe, 'adcamp-area_'+ dir +'align-' + align);

		return this;
	};

	/* Some actions for float banner */
	Mraid.prototype._bannerFloatHandler = function() {
		var isAnimation = this.s.animation ? 10 : false;

		if ( !this._isFloat() ) return this;

		if (isAnimation) addClass(this.iframe, 'adcamp-area_float_animation');

		addClass(this.iframe, 'adcamp-area_float');

		this.addEventListener('ready', function() {
			this
				._autoResizeFloat()
				.show(isAnimation);
		}.bind(this));

		return this;
	};

	/* Handle errors */
	Mraid.prototype._errorsHandler = function(error) {
		//if (error.message === 'noimg') this.destroy();

		if (typeof this.userSettings.onError === 'function') this.userSettings.onError(error.message);
		
		this.trigger('iframeError', error);

		return this;
	};

	if (!window.Mraid) window.Mraid = Mraid;
}());
