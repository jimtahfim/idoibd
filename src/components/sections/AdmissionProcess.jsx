import React from 'react';
import { ExternalLink, Globe, CreditCard, Laptop } from 'lucide-react';

const ADMISSION_URL = "https://admission.idoibd.com/";

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

        <div className="grid grid-cols-3 gap-6" style={{ marginBottom: '30px' }}>
          <div className="card text-center" style={{ padding: '35px 20px' }}>
            <div className="mx-auto bg-mint text-primary mb-4" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', backgroundColor: 'var(--bg-mint)' }}>
              <Globe size={28} color="var(--primary)" />
            </div>
            <h3 className="h3 mb-2">১. পোর্টালে প্রবেশ</h3>
            <p className="p-small">
              অফিশিয়াল ভর্তি পোর্টালে (admission.idoibd.com) গিয়ে পছন্দের কোর্স নির্বাচন করুন।
            </p>
          </div>

          <div className="card text-center" style={{ padding: '35px 20px' }}>
            <div className="mx-auto bg-mint text-primary mb-4" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', backgroundColor: 'var(--bg-mint)' }}>
              <CreditCard size={28} color="var(--primary)" />
            </div>
            <h3 className="h3 mb-2">২. ফি প্রদান</h3>
            <p className="p-small">বিকাশ/নগদ/রকেটের মাধ্যমে সহজ ও নিরাপদ পদ্ধতিতে ভর্তি ফি পরিশোধ করুন।</p>
          </div>

          <div className="card text-center" style={{ padding: '35px 20px' }}>
            <div className="mx-auto bg-mint text-primary mb-4" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', backgroundColor: 'var(--bg-mint)' }}>
              <Laptop size={28} color="var(--primary)" />
            </div>
            <h3 className="h3 mb-2">৩. ক্লাসে যুক্ত হওয়া</h3>
            <p className="p-small">ভর্তি সম্পন্ন হওয়ার সাথে সাথে সরাসরি অনলাইন লাইভ ক্লাস গ্রুপে যুক্ত হোন।</p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href={ADMISSION_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ padding: '12px 28px' }}
          >
            সরাসরি ভর্তি পোর্টালে যান <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
