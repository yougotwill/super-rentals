import Component from '@ember/component';

export default Component.extend({
    isWide: false, //controls the size of the image in the rental-listing route
    actions: { // action hash for the renal-listing route
        toggleImageSize() { // toggles the image size based on the isWide variable
            this.toggleProperty('isWide');
        }
    }
});
