import ReactDOM from "react-dom";
import { UIModalOverlayWrapper, UIModalBackdropWrapper } from "./styles";

const UIModalBackdrop = ({ onClose }) => <UIModalBackdropWrapper onClick={onClose} />;

const UIModalOverlay = ({ children }) => (
  <UIModalOverlayWrapper>
    <div className="content">{children}</div>
  </UIModalOverlayWrapper>
);

const UIModal = ({ children, onClose }) =>
  ReactDOM.createPortal(
    <>
      <UIModalBackdrop onClose={onClose} />
      <UIModalOverlay>{children}</UIModalOverlay>
    </>,
    document.getElementById("overlays")
  );

export default UIModal;
