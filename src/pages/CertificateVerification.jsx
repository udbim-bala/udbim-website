import React, { useState } from "react";
import "../css/CertificateVerification.css";
import logoWhite from '../assets/Logo-White.png';
import certificateData from '../data/certificate'; // ✅ Local data import

// ✅ Move this above useState so it's defined first
function generateCaptcha() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

const CertificateVerification = () => {
  const [certId, setCertId] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const verify = async () => {
    const id = certId.trim();
    if (!id) {
      shakeElement("certIdInput");
      return alert("Please enter Certificate ID.");
    }
    if (captchaInput !== generatedCaptcha) {
      shakeElement("captchaInput");
      alert("Invalid Captcha. Please try again.");
      setGeneratedCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    setLoading(true);
    setOutput(null);

    try {
      // ✅ Case-insensitive, trimmed match
      const foundCert = certificateData.find(
        cert => cert.ID.trim().toLowerCase() === id.trim().toLowerCase()
      );

      if (!foundCert) {
        setOutput(<p className="cv-error-msg">❌ Certificate not found</p>);
      } else {
        setOutput(
          <div className="cv-modern-card animated-fade-in">
            <div className="cv-header">
              <div className="cv-logo-container">
                <img src={logoWhite} alt="Institute Logo" className="cv-logo-modern" />
                <div className="cv-logo-shine"></div>
              </div>
              <div>
                <h2>Certificate of Completion</h2>
                <p className="cv-verified-tag">
                  <span className="cv-verified-icon">✓</span> Verified
                </p>
              </div>
            </div>

            <div className="cv-grid">
              <div className="cv-photo-section">
                <div className="cv-photo-frame">
                  {foundCert["Photo URL"] && (
                    <img 
                      src={foundCert["Photo URL"]}
                      alt="Candidate" 
                      className="cv-modern-photo" 
                      onError={(e) => {
                        e.target.src = "https://placehold.co/150x150?text=No+Photo";
                        e.target.onerror = null;
                      }}
                    />
                  )}
                  <div className="cv-photo-shine"></div>
                </div>
                <div className="cv-badge pulse-animation">Candidate</div>
              </div>

              <div className="cv-info-section">
                <div className="cv-info-item">
                  <span className="cv-info-label">Name:</span>
                  <span className="cv-info-value">{foundCert["Name"]}</span>
                </div>
                <div className="cv-info-item">
                  <span className="cv-info-label">Certificate ID:</span>
                  <span className="cv-info-value">{foundCert["ID"]}</span>
                </div>
                <div className="cv-info-item">
                  <span className="cv-info-label">DOB:</span>
                  <span className="cv-info-value">
                    {/* ✅ Safe DOB display - no crash */}
                    {(() => {
                      if (!foundCert["DOB"]) return "N/A";
                      const parts = foundCert["DOB"].split(/[-/]/);
                      if (parts.length === 3) {
                        const [day, month, year] = parts.map(p => p.padStart(2, "0"));
                        return `${year}-${month}-${day}`;
                      }
                      return foundCert["DOB"];
                    })()}
                  </span>
                </div>
                <div className="cv-info-item">
                  <span className="cv-info-label">Qualification:</span>
                  <span className="cv-info-value">{foundCert["Qualification"]}</span>
                </div>
                <div className="cv-info-item">
                  <span className="cv-info-label">Course Name:</span>
                  <span className="cv-info-value">{foundCert["Course Title"]}</span>
                </div>
                <div className="cv-info-item">
                  <span className="cv-info-label">Batch Info:</span>
                  <span className="cv-info-value">{foundCert["Batch Info"]}</span>
                </div>
                <div className="cv-info-item">
                  <span className="cv-info-label">Status:</span>
                  <span className="cv-info-value">{foundCert["Status"]}</span>
                </div>
                <a 
                  className="cv-modern-download" 
                  href={foundCert["Certificate PDF URL"]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="cv-download-icon">↓</span> Download Certificate PDF
                </a>
              </div>
            </div>

            <div className="cv-footer-modern">
              <div className="cv-watermark"></div>
              <p>Issued by Universal Detailing & BIM Training Institute | &copy; {new Date().getFullYear()}</p>
              <small>Verifiable at ud-bimtraining.com/verify-certificate</small>
            </div>
          </div>
        );
      }
    } catch (err) {
      setOutput(<p className="cv-error-msg">❌ Error: {err.message}</p>);
    } finally {
      setLoading(false);
      setGeneratedCaptcha(generateCaptcha());
      setCaptchaInput("");
    }
  };

  const shakeElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.add("shake-animation");
      setTimeout(() => {
        element.classList.remove("shake-animation");
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      verify();
    }
  };

  return (
    <div className="cv-full-width-container">
      <div className={`cv-verify-box ${isFocused ? "box-glow" : ""}`}>
        <div className="cv-header-section">
          <h2 className="cv-title">Certificate Verification</h2>
          <p className="cv-subtitle">Verify the authenticity of your certificate</p>
        </div>

        <div className="cv-input-row">
          <div className="cv-input-group cv-input-large">
            <input
              id="certIdInput"
              type="text"
              className="cv-input"
              placeholder="Enter Certificate ID"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyPress={handleKeyPress}
            />
            <span className="cv-input-border"></span>
          </div>

          <div className="cv-captcha-container">
            <div className="cv-captcha-box">
              <div className="cv-captcha-code">{generatedCaptcha}</div>
              <button 
                className="cv-refresh-btn" 
                onClick={() => setGeneratedCaptcha(generateCaptcha())}
                title="Refresh Captcha"
              >
                ↻
              </button>
            </div>
            <div className="cv-input-group">
              <input
                id="captchaInput"
                type="text"
                className="cv-input"
                placeholder="Enter Captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                onKeyPress={handleKeyPress}
              />
              <span className="cv-input-border"></span>
            </div>
          </div>

          <button className="cv-button" onClick={verify}>
            <span className="cv-button-text">Verify Certificate</span>
            <span className="cv-button-icon">→</span>
          </button>
        </div>

        <div className="cv-result-section" style={{ display: loading || output ? "block" : "none" }}>
          {loading ? (
            <div className="cv-loading">
              <div className="cv-spinner"></div>
              <p>Verifying certificate...</p>
            </div>
          ) : (
            output
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateVerification;
