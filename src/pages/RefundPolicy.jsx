import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  PageContainer,
  BackBtn,
  PageHeader,
  PageTitle,
  PageSubtitle,
  PolicyCard,
  PolicyList,
  PolicyListItem,
} from "./RefundPolicy.styles";

const REFUND_ITEMS = [
  <>
    Cancellations will be considered only if the request is made immediately
    after placing the order. However, the cancellation request may not be
    entertained if the orders have been communicated to the vendors/merchants
    and they have initiated the process of shipping them.
  </>,
  <>
    SANJAY KUMAR JUTTUGA does not accept cancellation requests for perishable
    items like flowers, eatables etc. However, refund/replacement can be made if
    the customer establishes that the quality of product delivered is not good.
  </>,
  <>
    In case of receipt of damaged or defective items please report the same to
    our Customer Service team. The request will, however, be entertained once
    the merchant has checked and determined the same at his own end. This should
    be reported within <strong>same day of receipt</strong> of the products. In
    case you feel that the product received is not as shown on the site or as
    per your expectations, you must bring it to the notice of our customer
    service within <strong>same day of receiving the product</strong>. The
    Customer Service Team after looking into your complaint will take an
    appropriate decision.
  </>,
  <>
    In case of complaints regarding products that come with a warranty from
    manufacturers, please refer the issue to them.
  </>,
  <>
    In case of any refunds approved by SANJAY KUMAR JUTTUGA, it will take{" "}
    <strong>6–8 working days</strong> for the refund to be processed to the end
    customer.
  </>,
];

function RefundPolicy() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <PageContainer>
        <BackBtn onClick={() => navigate("/")}>← Back to Home</BackBtn>

        <PageHeader>
          <PageTitle>Cancellation &amp; Refund Policy</PageTitle>
          <PageSubtitle>
            SANJAY KUMAR JUTTUGA believes in helping its customers as far as
            possible, and has therefore a liberal cancellation policy. Under
            this policy:
          </PageSubtitle>
        </PageHeader>

        <PolicyCard>
          <PolicyList>
            {REFUND_ITEMS.map((item, i) => (
              <PolicyListItem key={i}>{item}</PolicyListItem>
            ))}
          </PolicyList>
        </PolicyCard>
      </PageContainer>
    </PageWrapper>
  );
}

export default RefundPolicy;
