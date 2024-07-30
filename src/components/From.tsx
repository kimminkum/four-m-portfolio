import React from "react";

interface FormData {
  name: string;
  address: string;
}

const From: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
    </div>
  );
};

export default From;
