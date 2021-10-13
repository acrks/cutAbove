import * as StyleApiUtil from "../util/style_api_util";

export const RECEIVE_STYLES = "RECEIVE_STYLES";
export const RECEIVE_STYLE = "RECEIVE_STYLE";
export const REMOVE_STYLE = "REMOVE_STYLE";
export const RECEIVE_STYLE_ERRORS = "RECEIVE_STYLE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

export const receiveStyles = styles => {
  return {
    type: RECEIVE_STYLES,
    styles
  }
}
export const receiveStyle = style => {
  return {
    type: RECEIVE_STYLE,
    style
  }
}
export const removeStyle = styleId => {
  return {
    type: REMOVE_STYLE,
    styleId
  }
}
export const receiveStyleErrors = errors => {
  return {
    type: RECEIVE_STYLE_ERRORS,
    errors
  }
}
export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}

// fetches all styles the stylist has created
export const fetchStylesFromStylist = stylistId => {
  return StyleApiUtil.fetchStylesFromStylist(stylistId)
    .then(
      styles => dispatch(receiveStyles(styles)),
      err => dispatch(receiveStyleErrors(err.response.data))
    )
} 

export const fetchStyle = styleId => {
  return StyleApiUtil.fetchStyle(styleId)
    .then(
      style => dispatch(receiveStyle(style)),
      err => dispatch(receiveStyleErrors(err.response.data))
    )
}

export const createStyle = style => {
  return StyleApiUtil.createStyle(style)
  .then(
    style => dispatch(receiveStyle(style)),
    err => dispatch(receiveStyleErrors(err.response.data))
  )
}

export const updateStyle = style => {
  return StyleApiUtil.updateStyle(style)
  .then(
    style => dispatch(receiveStyle(style)),
    err => dispatch(receiveStyleErrors(err.response.data))
  )
}

export const deleteStyle = styleId => {
  return StyleApiUtil.deleteStyle(styleId)
  .then(
    style => dispatch(removeStyle(styleId)),
    err => dispatch(receiveStyleErrors(err.response.data))
  )
}