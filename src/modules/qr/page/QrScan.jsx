import { useParams } from "react-router-dom";
import { useQrInfo } from "../qr.hooks";
import {
  Page,
  Card,
  Brand,
  OwnerName,
  Divider,
  FieldList,
  FieldRow,
  FieldNum,
  FieldContent,
  FieldKey,
  FieldVal,
  BloodVal,
  Actions,
  CallBtn,
  SosBtn,
  Spinner,
  ErrorBox,
  ErrorTitle,
  ErrorText,
  RetryBtn,
} from "./QrScan.styles";

function QrScan() {
  const { qrId } = useParams();
  const { data, isLoading, isError, error, refetch } = useQrInfo(qrId);
  const info = data?.data;

  // Timeline list format
  const getFields = (d) => [
    { key: "Owner Name", val: d.ownerName, type: "text" },
    { key: "Phone", val: d.ownerPhoneNumber, type: "text" },
    { key: "Blood Group", val: d.bloodGroup, type: "blood" },
    { key: "Vehicle Reg. No.", val: d.vehicleRegistrationNumber, type: "text" },
  ];

  return (
    <Page>
      <Card>
        <Brand>LYF TAG</Brand>

        {isLoading && <Spinner />}

        {(isError || (!isLoading && !info)) && (
          <ErrorBox>
            <ErrorTitle>{!qrId ? "Invalid Link" : "Not Found"}</ErrorTitle>
            <ErrorText>
              {!qrId
                ? "No QR ID provided in this URL."
                : error?.message ||
                  "Could not retrieve details for this QR code."}
            </ErrorText>
            <RetryBtn onClick={() => refetch()}>Try Again</RetryBtn>
          </ErrorBox>
        )}

        {info && (
          <>
            <OwnerName>{info.ownerName || "Unknown Owner"}</OwnerName>
            <Divider />

            <FieldList>
              {getFields(info).map((f, i) => (
                <FieldRow key={f.key}>
                  <FieldNum>{i + 1}</FieldNum>
                  <FieldContent>
                    <FieldKey>{f.key}</FieldKey>
                    {f.type === "blood" ? (
                      <BloodVal>{f.val || "—"}</BloodVal>
                    ) : (
                      <FieldVal>{f.val || "—"}</FieldVal>
                    )}
                  </FieldContent>
                </FieldRow>
              ))}
            </FieldList>

            <Actions>
              <CallBtn
                href={
                  info.ownerPhoneNumber ? `tel:${info.ownerPhoneNumber}` : "#"
                }
                aria-disabled={!info.ownerPhoneNumber ? "true" : undefined}
              >
                Call Owner
              </CallBtn>
              <SosBtn href="tel:112">Emergency SOS — 112</SosBtn>
            </Actions>
          </>
        )}
      </Card>
    </Page>
  );
}

export default QrScan;
