import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  useProfileDetails,
  useUpdateProfile,
  useCreateProfile,
} from "../profile.hooks";
import {
  PageWrapper,
  FormCard,
  BackLink,
  Title,
  Subtitle,
  FieldGroup,
  Label,
  Input,
  Select,
  ErrorMsg,
  SuccessMsg,
  SubmitBtn,
} from "./UpdateProfile.styles";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

function UpdateProfile() {
  const navigate = useNavigate();
  const hasInitialized = useRef(false);
  const { data, isLoading } = useProfileDetails();
  const hasExistingData = Boolean(data?.data);

  // Pick PATCH (update) if data exists, POST (create) if not
  const {
    mutate: update,
    isPending: isUpdating,
    error: updateError,
    isSuccess: updateSuccess,
  } = useUpdateProfile();

  const {
    mutate: create,
    isPending: isCreating,
    error: createError,
    isSuccess: createSuccess,
  } = useCreateProfile();

  const isPending = isUpdating || isCreating;
  const error = updateError || createError;
  const isSuccess = updateSuccess || createSuccess;

  const [form, setForm] = useState({
    ownerName: "",
    ownerPhoneNumber: "",
    bloodGroup: "",
    vehicleRegistrationNumber: "",
  });

  // Pre-populate form only ONCE when data loads
  useEffect(() => {
    console.log("UpdateProfile: Data changed", data);
    if (data?.data && !hasInitialized.current) {
      console.log("UpdateProfile: Initializing form with", data.data);
      const d = data.data;
      setForm({
        ownerName: d.ownerName || "",
        ownerPhoneNumber: d.ownerPhoneNumber || "",
        bloodGroup: d.bloodGroup || "",
        vehicleRegistrationNumber: d.vehicleRegistrationNumber || "",
      });
      hasInitialized.current = true;
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mutate = hasExistingData ? update : create;
    mutate(form, {
      onSuccess: () => {
        setTimeout(() => navigate("/profile"), 1200);
      },
    });
  };

  return (
    <PageWrapper>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-10 col-md-7 col-lg-6">
            <FormCard>
              {/* ── Back ── */}
              <BackLink type="button" onClick={() => navigate("/profile")}>
                <ArrowLeft size={16} strokeWidth={2} />
                Back to Profile
              </BackLink>

              <Title>Update Details</Title>
              <Subtitle>
                Keep your emergency profile information up to date.
              </Subtitle>

              <form onSubmit={handleSubmit} noValidate>
                {/* ── Full Name ── */}
                <FieldGroup>
                  <Label htmlFor="ownerName">Full Name</Label>
                  <Input
                    id="ownerName"
                    name="ownerName"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.ownerName}
                    onChange={handleChange}
                  />
                </FieldGroup>

                {/* ── Phone ── */}
                <FieldGroup>
                  <Label htmlFor="ownerPhoneNumber">Phone Number</Label>
                  <Input
                    id="ownerPhoneNumber"
                    name="ownerPhoneNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={form.ownerPhoneNumber}
                    onChange={handleChange}
                  />
                </FieldGroup>

                {/* ── Blood Group ── */}
                <FieldGroup>
                  <Label htmlFor="bloodGroup">Blood Group</Label>
                  <Select
                    id="bloodGroup"
                    name="bloodGroup"
                    value={form.bloodGroup}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select your blood group
                    </option>
                    {BLOOD_GROUPS.map((bg) => (
                      <option key={bg} value={bg}>
                        {bg}
                      </option>
                    ))}
                  </Select>
                </FieldGroup>

                {/* ── Vehicle Reg ── */}
                <FieldGroup>
                  <Label htmlFor="vehicleRegistrationNumber">
                    Vehicle Registration No.
                  </Label>
                  <Input
                    id="vehicleRegistrationNumber"
                    name="vehicleRegistrationNumber"
                    type="text"
                    placeholder="e.g. AP 09 AB 1234"
                    value={form.vehicleRegistrationNumber}
                    onChange={handleChange}
                  />
                </FieldGroup>

                {error && <ErrorMsg>{error.message}</ErrorMsg>}
                {isSuccess && (
                  <SuccessMsg>✓ Profile updated successfully!</SuccessMsg>
                )}

                <SubmitBtn type="submit" disabled={isPending}>
                  {isPending ? "Saving…" : "Save Changes"}
                </SubmitBtn>
              </form>
            </FormCard>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default UpdateProfile;
