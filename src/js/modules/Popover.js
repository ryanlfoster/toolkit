/**
 * @copyright	Copyright 2010-2013, The Titon Project
 * @license		http://opensource.org/licenses/bsd-license.php
 * @link		http://titon.io
 */

/**
 * Creates dynamic popovers that will display at a specific element on click.
 *
 * @uses	Titon
 * @uses	Titon.Tooltip
 */
Titon.Popover = new Class({
	Extends: Titon.Tooltip,

	/**
	 * Default options.
	 *
	 *	position		- (string) The position to display the popover over the element
	 *	getContent		- (string) Attribute to read the content from
	 *	errorElement	- (string) CSS query for the error message element within the template
	 *	loadingElement	- (string) CSS query for the loading element within the template
	 *	titleElement	- (string) CSS query for the title element within the template
	 *	contentElement	- (string) CSS query for the content element within the template
	 *	template		- (string) HTML string template that will be converted to DOM nodes
	 */
	options: {
		position: 'topCenter',
		getContent: 'data-popover',
		errorElement: '.popover-error',
		loadingElement: '.popover-loading',
		titleElement: '.popover-head',
		contentElement: '.popover-body',
		template: '<div class="popover">' +
			'<div class="popover-inner">' +
				'<div class="popover-head"></div>' +
				'<div class="popover-body"></div>' +
			'</div>' +
			'<div class="popover-arrow"></div>' +
		'</div>'
	},

	/**
	 * Initialize popovers.
	 *
	 * @param {String} query
	 * @param {Object} options
	 */
	initialize: function(query, options) {
		options = options || {};
		options.mode = 'click';

		// Disallow mouse positioning
		if (options.position && options.position === 'mouse') {
			options.position = 'topCenter';
		}

		this.parent(query, options);
	}

});

/**
 * All instances loaded via factory().
 */
Titon.Popover.instances = {};

/**
 * Easily create multiple instances.
 *
 * @param {String} query
 * @param {Object} options
 * @return {Titon.Popover}
 */
Titon.Popover.factory = function(query, options) {
	if (Titon.Popover.instances[query]) {
		return Titon.Popover.instances[query];
	}

	var instance = new Titon.Popover(query, options);

	Titon.Popover.instances[query] = instance;

	return instance;
};

/**
 * Hide all instances.
 */
Titon.Popover.hide = function() {
	Object.each(Titon.Popover.instances, function(popover) {
		popover.hide();
	});
};