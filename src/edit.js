import ServerSideRender from '@wordpress/server-side-render';
import { __ } from '@wordpress/i18n';
import { SelectControl, 
    Toolbar,
    Button,
    Tooltip,
    PanelBody,
    PanelRow,
    FormToggle,
    ToggleControl,
    ToolbarGroup,
    Disabled, 
    RadioControl,
    RangeControl,
    FontSizePicker } from '@wordpress/components';

    import {
        RichText,
        AlignmentToolbar,
        BlockControls,
        BlockAlignmentToolbar,
        InspectorControls,
        InnerBlocks,
        withColors,
        PanelColorSettings,
        getColorClassName
    } from '@wordpress/editor'
    ;
import { withSelect, widthDispatch } from '@wordpress/data';

const orderbyOptions = [
    { label: 'Title', value: 'title' },
    { label: 'Date', value: 'date' },
    { label: 'Menu Order', value: 'menu_order' },
    { label: 'Random', value: 'rand' },
 ];

const edit = props => {
    const { attributes: {orderBy, order, showCount, hierarchical, hideEmpty, exclude, include, defaultOptionText, defaultOptionSub, category}, className, setAttributes } = props;

    const inspectorControls = (
        <InspectorControls key="inspector">
            <PanelBody title={ __( 'Category Dropdown Options' )}>
            <PanelRow>
                <SelectControl
                    label="Order By"
                    value={orderBy}
                    options= { orderbyOptions }
                    onChange={ ( nextValue ) =>
                        setAttributes( {orderBy:  nextValue } )
                    }
                />
            </PanelRow>
            </PanelBody>
        </InspectorControls>
    );

    return [
        <div className={ props.className }>
            { inspectorControls }
            <div id="child_cat_dropdown">
                Dropdown goes here.    
            </div>
        </div>
    ];
};

export default edit;