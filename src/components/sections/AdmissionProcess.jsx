import React from 'react';
import { ArrowRight, FileSignature, CreditCard, Laptop } from 'lucide-react';

const AdmissionProcess = () => {
  return (
    <section className="section bg-neutral-soft" id="admission">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="h2 text-dark">ভর্তি প্রক্রিয়া</h2>
          <p className="p-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
            খুব সহজেই ৩টি ধাপে আমাদের যেকোনো কোর্সে ভর্তি সম্পন্ন করতে পারবেন।
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="card text-center" style={{ padding: '40px 20px' }}>
            <div className="mx-auto bg-mint text-primary mb-4" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', backgroundColor: 'var(--bg-mint)' }}>
              <FileSignature size={28} color="var(--primary)" />
            </div>
            <h3 className="h3 mb-2">১. ফরম পূরণ</h3>
            <p className="p-small">ওয়েবসাইটে আপনার পছন্দের কোর্সে গিয়ে রেজিস্ট্রেশন ফরম পূরণ করুন।</p>
          </div>

          <div className="card text-center" style={{ padding: '40px 20px' }}>
            <div className="mx-auto bg-mint text-primary mb-4" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', backgroundColor: 'var(--bg-mint)' }}>
              <CreditCard size={28} color="var(--primary)" />
            </div>
            <h3 className="h3 mb-2">২. ফি প্রদান</h3>
            <p className="p-small">বিকাশ/নগদ বা ব্যাংকের মাধ্যমে কোর্সের নির্ধারিত ফি পরিশোধ করুন।</p>
          </div>

          <div className="card text-center" style={{ padding: '40px 20px' }}>
            <div className="mx-auto bg-mint text-primary mb-4" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', backgroundColor: 'var(--bg-mint)' }}>
              <Laptop size={28} color="var(--primary)" />
            </div>
            <h3 className="h3 mb-2">৩. ক্লাসে যুক্ত হওয়া</h3>
            <p className="p-small">ভর্তি ভেরিফাই হওয়ার পর আপনাকে ক্লাস গ্রুপে যুক্ত করে নেওয়া হবে।</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
