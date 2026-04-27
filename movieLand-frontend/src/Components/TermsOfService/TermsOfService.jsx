import React from 'react';
import "./TermsOfService.css"

function TermsOfService() {
  return (
   <>
    <div className="service-container">
        <div className="service-hero">
            <h1 className="service-title">Terma of Service</h1>
            <p className="service-subtitle">Your Personal Cinema Collection</p>
            <div className="service-divider"></div>
            <p className="service-description">
                Welcome to MovieLand! By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully before using our platform.
            </p>
        </div>

        <div className="service-content">
            <div className="service-section">
                <h2 className="section-title">1. Acceptance of Terms</h2>
                <p>
                    By accessing MovieLand, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
            </div>
            <div className="service-section">
                <h2 className="section-title">2. User Accounts</h2>
                <p>
                    When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
                </p>
            </div>
            <div className="service-section">
                <h2 className="section-title">3. Intellectual Property Rights</h2>
                <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of MovieLand and its licensors. MovieLand aggregates movie data, posters, and details from third-party APIs (such as TMDB). The intellectual property of the movie posters, titles, and plot summaries belongs to their respective owners and copyright holders.
                </p>
            </div>
            <div className="service-section">
                <h2 className="section-title">4. User Conduct</h2>
                <p>
                   You agree not to use the Service:
                   <ul>
                    <li>In any way that violates any applicable national or international law or regulation.</li>
                    <li>To exploit, harm, or attempt to exploit or harm minors in any way.</li>
                    <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                    <li>To impersonate or attempt to impersonate MovieLand, a MovieLand employee, another user, or any other person or entity.</li>
                   </ul>
                </p>
            </div>
            <div className="service-section">
                <h2 className="section-title">5. Third-Party Links & Content</h2>
                <p>
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by MovieLand. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites that you visit.
                </p>
            </div>
            <div className="service-section">
                <h2 className="section-title">6. Disclaimer of Warranties</h2>
                <p>
                    Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                </p>
            </div>
            <div className="service-section">
                <h2 className="section-title">7. Limitation of Liability</h2>
                <p>
                    In no event shall MovieLand, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                </p>
            </div>
            <div className="service-section">
                <h2 className="section-title">8. Changes to Terms</h2>
                <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
            </div>
            <div className="service-section">
                <h2 className="section-title">9. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us at 
                    support@movieland.com.
                </p>
            </div>
        </div>
    </div>
   </>
  )
}

export default TermsOfService;