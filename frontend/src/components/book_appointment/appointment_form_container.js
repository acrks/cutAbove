import { connect } from 'react-redux';
import { createAppointment } from '../../actions/appointment_actions';
import { fetchAllStyles, fetchStylesFromStylist } from '../../actions/style_actions';
import { fetchStylist } from '../../actions/stylist_actions';
import AppointmentForm from './appointment_form';
import { removeErrors } from '../../actions/stylist_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.user,
  stylist: state.entities.stylists,
  styles: Object.values(state.entities.styles),
  errors: state.errors.appointment
})

const mapDispatchToProps = (dispatch) => ({
  createAppointment: (appointment) => dispatch(createAppointment(appointment)),
  fetchStylist: (stylistId) => dispatch(fetchStylist(stylistId)),
  fetchStylesFromStylist: (stylistId) => dispatch(fetchStylesFromStylist(stylistId)),
  removeErrors: () => dispatch(removeErrors()),
  fetchStyles: () => dispatch(fetchAllStyles())
})
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm)