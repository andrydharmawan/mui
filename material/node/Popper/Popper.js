"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PopperUnstyled = _interopRequireDefault(require("@mui/base/PopperUnstyled"));

var _utils = require("@mui/utils");

var _system = require("@mui/system");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/components/autocomplete/)
 * - [Menus](https://mui.com/components/menus/)
 * - [Popper](https://mui.com/components/popper/)
 *
 * API:
 *
 * - [Popper API](https://mui.com/api/popper/)
 */
const Popper = /*#__PURE__*/React.forwardRef(function Popper(props, ref) {
  const theme = (0, _system.useThemeWithoutDefault)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopperUnstyled.default, (0, _extends2.default)({
    direction: theme == null ? void 0 : theme.direction
  }, props, {
    ref: ref
  }));
});
process.env.NODE_ENV !== "production" ? Popper.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_utils.HTMLElementType, _propTypes.default.object, _propTypes.default.func]),

  /**
   * Popper render function or node.
   */
  children: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_propTypes.default.node, _propTypes.default.func]),

  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_utils.HTMLElementType, _propTypes.default.func]),

  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: _propTypes.default.bool,

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: _propTypes.default.bool,

  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: _propTypes.default.arrayOf(_propTypes.default.shape({
    data: _propTypes.default.object,
    effect: _propTypes.default.func,
    enabled: _propTypes.default.bool,
    fn: _propTypes.default.func,
    name: _propTypes.default.any.isRequired,
    options: _propTypes.default.object,
    phase: _propTypes.default.oneOf(['afterMain', 'afterRead', 'afterWrite', 'beforeMain', 'beforeRead', 'beforeWrite', 'main', 'read', 'write']),
    requires: _propTypes.default.arrayOf(_propTypes.default.string),
    requiresIfExists: _propTypes.default.arrayOf(_propTypes.default.string)
  })),

  /**
   * If `true`, the component is shown.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: _propTypes.default.oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: _propTypes.default.shape({
    modifiers: _propTypes.default.array,
    onFirstUpdate: _propTypes.default.func,
    placement: _propTypes.default.oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
    strategy: _propTypes.default.oneOf(['absolute', 'fixed'])
  }),

  /**
   * A ref that points to the used popper instance.
   */
  popperRef: _utils.refType,

  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: _propTypes.default.bool
} : void 0;
var _default = Popper;
exports.default = _default;