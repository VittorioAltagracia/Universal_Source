import { Toast, ToastHeader, ToastBody } from "reactstrap";

const ErrorToast = ({ errorMes }) => {
  return (
    <Toast className="p-2 bg-danger my-3">
      <ToastHeader>Error</ToastHeader>
      <ToastBody>{errorMes}</ToastBody>
    </Toast>
  );
};

export default ErrorToast;
