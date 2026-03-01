import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { User, ArrowLeft, Download, Lock } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { useAuthContext } from "../../auth/AuthContext";
import { useLogout } from "../../auth/auth.hooks";
import { useProfileDetails } from "../profile.hooks";
import {
  PageWrapper,
  BackLink,
  AvatarBlock,
  Avatar,
  NameStack,
  ProfileName,
  ProfileEmail,
  MemberBadge,
  QrSection,
  QrLabel,
  DownloadBtn,
  DetailList,
  DetailRow,
  RowLabel,
  RowValue,
  EmptyValue,
  ActionsRow,
  EditBtn,
  LogoutBtn,
  Spinner,
  QrOverlay,
  QrBlurred,
  UnlockOverlay,
  UnlockText,
} from "./Profile.styles";

const DETAILS = (d) => [
  { label: "Full Name", value: d?.ownerName },
  { label: "Phone Number", value: d?.ownerPhoneNumber },
  { label: "Blood Group", value: d?.bloodGroup },
  { label: "Vehicle Registration No.", value: d?.vehicleRegistrationNumber },
];

function Profile() {
  const navigate = useNavigate();
  const qrRef = useRef(null);
  const { user, loading: authLoading } = useAuthContext();
  const { mutate: logout } = useLogout();
  const { data, isLoading: detailsLoading, error } = useProfileDetails();

  if (authLoading) return <Spinner />;

  const details = data?.data;
  const displayName = user?.displayName || user?.email?.split("@")[0] || "User";

  console.log("===== DATA FROM PROFILE ======")
  console.log(data)
  console.log("===== DATA FROM PROFILE ======")
  const isRestricted =
    error?.code === "NOT_SUBSCRIBED" || error?.code === "PLAN_EXPIRED";

  const qrUrl = details?.qrId
    ? `${window.location.origin}/qr/${details.qrId}`
    : null;

  const handleDownload = () => {
    if (isRestricted) return;
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `lyftag-qr-${user.uid}.png`;
    link.click();
  };

  const handleUnlock = () => {
    navigate("/#packages");
  };

  return (
    <PageWrapper>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-10 col-md-7 col-lg-6">
            {/* ── Back to Home ── */}
            <BackLink type="button" onClick={() => navigate("/")}>
              <ArrowLeft size={16} strokeWidth={2} />
              Back to Home
            </BackLink>

            {/* ── Avatar + Name ── */}
            <AvatarBlock>
              <Avatar>
                <User size={26} strokeWidth={1.5} />
              </Avatar>
              <NameStack>
                <MemberBadge>LYF TAG Member</MemberBadge>
                <ProfileName>{displayName}</ProfileName>
                {user?.email && <ProfileEmail>{user.email}</ProfileEmail>}
              </NameStack>
            </AvatarBlock>

            {/* ── QR Code Section ── */}
            <QrSection ref={qrRef}>
              <QrLabel>Digital ID for Emergencies</QrLabel>

              {isRestricted ? (
                /* ── Blurred QR with Buy Overlay ── */
                <>
                  <QrOverlay>
                    <QrBlurred>
                      <QRCodeCanvas
                        value="MOCK_SUBSCRIPTION_REQUIRED"
                        size={140}
                      />
                    </QrBlurred>
                    <UnlockOverlay onClick={handleUnlock}>
                      <Lock
                        size={20}
                        color="var(--text-dark)"
                        style={{ marginBottom: 6 }}
                      />
                      <UnlockText>Get pack to unlock QR</UnlockText>
                    </UnlockOverlay>
                  </QrOverlay>
                  <DownloadBtn type="button" onClick={handleUnlock}>
                    Upgrade Now
                  </DownloadBtn>
                </>
              ) : qrUrl ? (
                /* ── Normal QR ── */
                <>
                  <QRCodeCanvas
                    value={qrUrl}
                    size={140}
                    level="H"
                    bgColor="#ffffff"
                    fgColor="#000000"
                  />
                  <DownloadBtn type="button" onClick={handleDownload}>
                    <Download size={14} strokeWidth={2} />
                    Download QR
                  </DownloadBtn>
                </>
              ) : (
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {detailsLoading ? "Generating ID..." : "No ID Assigned"}
                </p>
              )}
            </QrSection>

            {/* ── Detail Rows ── */}
            {detailsLoading ? (
              <Spinner />
            ) : (
              <DetailList>
                {DETAILS(details).map(({ label, value }) => (
                  <DetailRow key={label}>
                    <RowLabel>{label}</RowLabel>
                    {isRestricted ? (
                      <RowValue
                        style={{
                          color: "var(--text-muted)",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        Locked <Lock size={14} />
                      </RowValue>
                    ) : value ? (
                      <RowValue>{value}</RowValue>
                    ) : (
                      <EmptyValue>Not set</EmptyValue>
                    )}
                  </DetailRow>
                ))}
              </DetailList>
            )}

            {/* ── Actions ── */}
            <ActionsRow>
              <EditBtn
                disabled={isRestricted}
                onClick={() => {
                  if (!isRestricted) navigate("/profile/edit");
                }}
              >
                Update Details
              </EditBtn>
              <LogoutBtn
                onClick={() =>
                  logout(undefined, { onSuccess: () => navigate("/") })
                }
              >
                Logout
              </LogoutBtn>
            </ActionsRow>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Profile;
