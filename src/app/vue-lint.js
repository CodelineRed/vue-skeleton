export default
{
    "extends": "plugin:vue/recommended",
    "plugins": ["vue"],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 6
    },
    "rules": {
        "vue/comment-directive": "error",
        "vue/jsx-uses-vars": "error",
        "vue/multi-word-component-names": 0,
        "vue/no-arrow-functions-in-watch": "error",
        "vue/no-async-in-computed-properties": "error",
        "vue/no-child-content": "error",
        "vue/no-computed-properties-in-data": "error",
        "vue/no-deprecated-data-object-declaration": "error",
        "vue/no-deprecated-destroyed-lifecycle": "error",
        "vue/no-deprecated-dollar-listeners-api": "error",
        "vue/no-deprecated-dollar-scopedslots-api": "error",
        "vue/no-deprecated-events-api": "error",
        "vue/no-deprecated-filter": "error",
        "vue/no-deprecated-functional-template": "error",
        "vue/no-deprecated-html-element-is": "error",
        "vue/no-deprecated-inline-template": "error",
        "vue/no-deprecated-props-default-this": "error",
        "vue/no-deprecated-router-link-tag-prop": "error",
        "vue/no-deprecated-scope-attribute": "error",
        "vue/no-deprecated-slot-attribute": "error",
        "vue/no-deprecated-slot-scope-attribute": "error",
        "vue/no-deprecated-v-bind-sync": "error",
        "vue/no-deprecated-v-is": "error",
        "vue/no-deprecated-v-on-native-modifier": "error",
        "vue/no-deprecated-v-on-number-modifiers": "error",
        "vue/no-deprecated-vue-config-keycodes": "error",
        "vue/no-dupe-keys": "error",
        "vue/no-dupe-v-else-if": "error",
        "vue/no-duplicate-attributes": "error",
        "vue/no-export-in-script-setup": "error",
        "vue/no-expose-after-await": "error",
        "vue/no-lifecycle-after-await": "error",
        "vue/no-mutating-props": "error",
        "vue/no-parsing-error": "error",
        "vue/no-ref-as-operand": "error",
        "vue/no-reserved-component-names": "error",
        "vue/no-reserved-keys": "error",
        "vue/no-reserved-props": "error",
        "vue/no-setup-props-destructure": "error",
        "vue/no-shared-component-data": "error",
        "vue/no-side-effects-in-computed-properties": "error",
        "vue/no-template-key": "error",
        "vue/no-textarea-mustache": "error",
        "vue/no-unused-components": "error",
        "vue/no-unused-vars": "error",
        "vue/no-use-computed-property-like-method": "error",
        "vue/no-use-v-if-with-v-for": "error",
        "vue/no-useless-template-attributes": "error",
        "vue/no-v-for-template-key-on-child": "error",
        "vue/no-v-text-v-html-on-component": "error",
        "vue/no-watch-after-await": "error",
        "vue/prefer-import-from-vue": "error",
        "vue/require-component-is": "error",
        "vue/require-prop-type-constructor": "error",
        "vue/require-render-return": "error",
        "vue/require-slots-as-functions": "error",
        "vue/require-toggle-inside-transition": "error",
        "vue/require-v-for-key": "error",
        "vue/require-valid-default-prop": "error",
        "vue/return-in-computed-property": "error",
        "vue/return-in-emits-validator": "error",
        "vue/use-v-on-exact": "error",
        "vue/valid-attribute-name": "error",
        "vue/valid-define-emits": "error",
        "vue/valid-define-props": "error",
        "vue/valid-next-tick": "error",
        "vue/valid-template-root": "error",
        "vue/valid-v-bind": "error",
        "vue/valid-v-cloak": "error",
        "vue/valid-v-else-if": "error",
        "vue/valid-v-else": "error",
        "vue/valid-v-for": "error",
        "vue/valid-v-html": "error",
        "vue/valid-v-if": "error",
        "vue/valid-v-is": "error",
        "vue/valid-v-memo": "error",
        "vue/valid-v-model": "error",
        "vue/valid-v-on": "error",
        "vue/valid-v-once": "error",
        "vue/valid-v-pre": "error",
        "vue/valid-v-show": "error",
        "vue/valid-v-slot": "error",
        "vue/valid-v-text": "error",
        "vue/attribute-hyphenation": "warn",
        "vue/component-definition-name-casing": "warn",
        "vue/first-attribute-linebreak": "warn",
        "vue/html-closing-bracket-newline": "warn",
        "vue/html-closing-bracket-spacing": "warn",
        "vue/html-end-tags": "warn",
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        "vue/html-quotes": "warn",
        "vue/html-self-closing": ["warn", {
            "html": {
                "void": "never",
                "normal": "never",
                "component": "any"
            },
            "svg": "never",
            "math": "never"
        }],
        "vue/max-attributes-per-line": ["warn", {
            "singleline": {
                "max": 15
            },
            "multiline": {
                "max": 15
            }
        }],
        "vue/multiline-html-element-content-newline": "warn",
        "vue/mustache-interpolation-spacing": "warn",
        "vue/no-multi-spaces": "warn",
        "vue/no-spaces-around-equal-signs-in-attribute": "warn",
        "vue/no-template-shadow": "warn",
        "vue/one-component-per-file": "warn",
        "vue/prop-name-casing": "warn",
        "vue/require-default-prop": "warn",
        "vue/require-explicit-emits": "warn",
        "vue/require-prop-types": "warn",
        "vue/singleline-html-element-content-newline": ["warn", {
            "ignoreWhenNoAttributes": true,
            "ignoreWhenEmpty": true,
            "ignores": [
                "a", "button", "label", "option", "pre", "router-link", 
                "span", "textarea", "th"
            ]
        }],
        "vue/v-bind-style": "warn",
        "vue/v-on-event-hyphenation": "warn",
        "vue/v-on-style": "warn",
        "vue/v-slot-style": "warn",
        "vue/attributes-order": "warn",
        "vue/component-tags-order": "warn",
        "vue/no-lone-template": "warn",
        "vue/no-multiple-slot-args": "warn",
        "vue/no-v-html": "warn",
        "vue/order-in-components": "warn",
        "vue/this-in-template": "warn",
        "vue/script-indent": ["warn", 4, {
            "baseIndent": 1,
            "switchCase": 1,
            "ignores": []
        }]
    },
    "globals": ["$", "jQuery", "moment"],
    "envs": ["node", "browser", "es6"]
}
