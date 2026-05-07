"use client";

import { useState } from "react";

type FormType = "donate" | "receive" | "return";

export default function FormsSection() {
  const [activeForm, setActiveForm] = useState<FormType>("donate");
  const [submitted, setSubmitted] = useState<FormType | null>(null);

  const handleSubmit = (e: React.FormEvent, formType: FormType) => {
    e.preventDefault();
    setSubmitted(formType);
    setTimeout(() => setSubmitted(null), 5000);
  };

  const tabs: { id: FormType; label: string }[] = [
    { id: "donate", label: "Donate" },
    { id: "receive", label: "Receive" },
    { id: "return", label: "Return" },
  ];

  return (
    <section id="forms" className="px-6 md:px-16 py-24 bg-[#FFF3E0]">
      <div className="text-center mb-12">
        <span className="inline-block bg-[#F4645C] text-white text-[10px] font-extrabold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-5">
          Get Involved
        </span>
        <h2 className="font-['var(--font-fredoka)'] text-[clamp(1.8rem,4vw,2.8rem)] text-[#2C1810] mb-4">
          How Can We Help?
        </h2>
        <p className="text-[#8C6B5A] font-semibold max-w-[500px] mx-auto">
          Whether you&apos;re giving, receiving, or returning - you&apos;re part of the blessing.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveForm(tab.id)}
            className={`px-7 py-3 rounded-full border-2 text-[11px] font-extrabold tracking-[0.1em] uppercase transition-all ${
              activeForm === tab.id
                ? "bg-[#F4645C] border-[#F4645C] text-white"
                : "border-[#F4645C]/30 text-[#8C6B5A] hover:border-[#F4645C] hover:text-[#F4645C]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form Container */}
      <div className="max-w-[680px] mx-auto">
        {activeForm === "donate" && (
          <DonateForm onSubmit={(e) => handleSubmit(e, "donate")} submitted={submitted === "donate"} />
        )}
        {activeForm === "receive" && (
          <ReceiveForm onSubmit={(e) => handleSubmit(e, "receive")} submitted={submitted === "receive"} />
        )}
        {activeForm === "return" && (
          <ReturnForm onSubmit={(e) => handleSubmit(e, "return")} submitted={submitted === "return"} />
        )}
      </div>
    </section>
  );
}

interface FormProps {
  onSubmit: (e: React.FormEvent) => void;
  submitted: boolean;
}

function DonateForm({ onSubmit, submitted }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_40px_rgba(44,24,16,0.1)]">
      <h3 className="font-['var(--font-fredoka)'] text-2xl text-[#2C1810] mb-2">Donate Items</h3>
      <p className="text-[#8C6B5A] text-sm font-semibold mb-8 leading-relaxed">
        Share your gently-used baby items and help another family. All donations are deeply appreciated!
      </p>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <FormInput label="Your Name" placeholder="John Doe" />
        <FormInput label="Phone Number" placeholder="0712 345 678" type="tel" />
      </div>

      <div className="mb-5">
        <FormInput label="Items to Donate" placeholder="Describe the items you'd like to donate..." textarea />
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <FormSelect
          label="Item Condition"
          options={["Excellent - like new", "Good - minimal wear", "Fair - some wear but functional"]}
        />
        <FormSelect
          label="Preferred Drop-off"
          options={["Sunday at church", "Weekday arrangement", "I'll contact Muthoni"]}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-[#2C1810] text-[#FFF8F0] rounded-full text-[11px] font-extrabold tracking-[0.12em] uppercase transition-all hover:bg-[#F4645C] hover:-translate-y-0.5 mt-4"
      >
        Submit Donation
      </button>

      {submitted && <SuccessMessage message="Thank you for your donation! We'll be in touch soon." />}
    </form>
  );
}

function ReceiveForm({ onSubmit, submitted }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_40px_rgba(44,24,16,0.1)]">
      <h3 className="font-['var(--font-fredoka)'] text-2xl text-[#2C1810] mb-2">Receive Items</h3>
      <p className="text-[#8C6B5A] text-sm font-semibold mb-8 leading-relaxed">
        Need baby items? Fill out this form and we&apos;ll connect you with what&apos;s available.
      </p>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <FormInput label="Your Name" placeholder="Jane Doe" />
        <FormInput label="Phone Number" placeholder="0712 345 678" type="tel" />
      </div>

      <div className="mb-5">
        <label className="block text-[10px] font-extrabold tracking-[0.12em] uppercase text-[#6B3F2A] mb-2">
          Items Needed
        </label>
        <div className="flex flex-wrap gap-2">
          {["Clothing", "Car Seat", "Bassinet", "Feeding Items", "Breast Pump", "Baby Carrier", "Blankets", "Bath Items"].map((item) => (
            <ItemChip key={item} label={item} />
          ))}
        </div>
      </div>

      <div className="mb-5">
        <FormInput label="Additional Notes" placeholder="Any specific needs or preferences..." textarea />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-[#2C1810] text-[#FFF8F0] rounded-full text-[11px] font-extrabold tracking-[0.12em] uppercase transition-all hover:bg-[#F4645C] hover:-translate-y-0.5 mt-4"
      >
        Submit Request
      </button>

      {submitted && <SuccessMessage message="We got you! Someone will be in touch to arrange your items." />}
    </form>
  );
}

function ReturnForm({ onSubmit, submitted }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_40px_rgba(44,24,16,0.1)]">
      <h3 className="font-['var(--font-fredoka)'] text-2xl text-[#2C1810] mb-2">Return Items</h3>
      <p className="text-[#8C6B5A] text-sm font-semibold mb-8 leading-relaxed">
        Returning items you received? Thank you for keeping the cycle of blessing going!
      </p>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <FormInput label="Your Name" placeholder="Jane Doe" />
        <FormInput label="Phone Number" placeholder="0712 345 678" type="tel" />
      </div>

      <div className="mb-5">
        <FormInput label="Items Returning" placeholder="Describe the items you're returning..." textarea />
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <FormSelect
          label="Current Condition"
          options={["Excellent - like new", "Good - clean, some wear", "Fair - functional, more wear"]}
        />
        <FormSelect
          label="Time with Items"
          options={["Less than 1 month", "1-3 months", "3-6 months", "6-12 months", "Over a year"]}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-[#2C1810] text-[#FFF8F0] rounded-full text-[11px] font-extrabold tracking-[0.12em] uppercase transition-all hover:bg-[#F4645C] hover:-translate-y-0.5 mt-4"
      >
        Return Items
      </button>

      {submitted && <SuccessMessage message="Thank you for returning! Your items will bless another family." />}
    </form>
  );
}

function FormInput({
  label,
  placeholder,
  type = "text",
  textarea = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
}) {
  const className =
    "w-full bg-[#FFF8F0] border-2 border-transparent rounded-xl px-4 py-3 text-sm font-semibold text-[#3D2314] outline-none transition-colors focus:border-[#F4645C] focus:bg-white placeholder:text-[#8C6B5A]/50";

  return (
    <div>
      <label className="block text-[10px] font-extrabold tracking-[0.12em] uppercase text-[#6B3F2A] mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea className={`${className} min-h-[100px] resize-none`} placeholder={placeholder} />
      ) : (
        <input type={type} className={className} placeholder={placeholder} />
      )}
    </div>
  );
}

function FormSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[10px] font-extrabold tracking-[0.12em] uppercase text-[#6B3F2A] mb-2">
        {label}
      </label>
      <select className="w-full bg-[#FFF8F0] border-2 border-transparent rounded-xl px-4 py-3 text-sm font-semibold text-[#3D2314] outline-none transition-colors focus:border-[#F4645C] focus:bg-white appearance-none cursor-pointer bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%238C6B5A%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_16px_center]">
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function ItemChip({ label }: { label: string }) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setSelected(!selected)}
      className={`px-4 py-2 rounded-full border-2 text-xs font-bold transition-all ${
        selected
          ? "bg-[#F4645C] border-[#F4645C] text-white"
          : "border-[#F4645C]/25 bg-[#FFF8F0] text-[#8C6B5A] hover:border-[#F4645C]/50"
      }`}
    >
      {label}
    </button>
  );
}

function SuccessMessage({ message }: { message: string }) {
  return (
    <div className="mt-5 p-5 bg-[#A8E6CF] rounded-xl text-center animate-[fadein_0.35s_ease]">
      <h4 className="font-['var(--font-fredoka)'] text-lg text-[#6B3F2A] mb-1">Success!</h4>
      <p className="text-sm font-semibold text-[#8C6B5A]">{message}</p>
    </div>
  );
}
