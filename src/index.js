/**
 * Block dependencies
 */

import edit from './edit';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { dateI18n, format, __experimentalGetSettings } from '@wordpress/date';
import { setState } from '@wordpress/compose';
 
registerBlockType( 'gcs/wp-categoey-dropdown', {
    title: 'WP Category Dropdown',
    icon: 'sort',
    category: 'widgets',
    description: 'This block displays the parent and child categories in a dropdown.',
    example: {
    },
    attributes: {
        orderBy:{
            type: 'string',
            default: 'name',
        },
        order:{
            type: 'string',
            default: 'asc',
        },
        showCount:{
            type: 'boolean',
            default: false,
        },
        hierarchical:{
            type: 'boolean',
            default: true,
        },
        hideEmpty:{
            type: 'boolean',
            default: true,
        },
        exclude:{
            type: 'array',
            default: [],
        },
        include:{
            type: 'array',
            default: [],
        },
        defaultOptionText:{
            type: 'string',
            default: __('Parent Category', 'wpcd'),
        },
        defaultOptionSub:{
            type: 'string',
            default: __('Child Category', 'wpcd'),
        },
        category:{
            type: 'string',
            default: 'category',
        },
    },
    edit: edit,
    save: () => <div>WP Category Dropdown Save</div>,
} );