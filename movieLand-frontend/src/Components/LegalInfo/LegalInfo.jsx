import React from "react";
import "./LegalInfo.css";

function LegalInfo() {
	return (
		<div className="privacy-container">
			<div className="privacy-hero">
				<h1 className="privacy-title">Privacy Policy</h1>
				<p className="privacy-subtitle">Your privacy is important to us</p>
				<div className="privacy-divider"></div>
				<p className="privacy-description">
					At MovieLand, we are committed to protecting your personal information and your right to privacy.
					This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.
				</p>
			</div>

			<div className="privacy-content">
				<div className="privacy-section">
					<h2 className="section-title">1. Information We Collect</h2>
					<p>
						We collect personal information that you voluntarily provide to us when you register on the website, 
						express an interest in obtaining information about us or our products and services, or otherwise when you contact us. 
						This may include names, email addresses, usernames, and passwords.
					</p>
				</div>

				<div className="privacy-section">
					<h2 className="section-title">2. How We Use Your Information</h2>
					<p>
						We use personal information collected via our website for a variety of business purposes described below. 
						We process your personal information for these purposes in reliance on our legitimate business interests, 
						in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
						We use the information we collect or receive to facilitate account creation and logon process, 
						to manage user accounts, and to fulfill and manage your orders or requests.
					</p>
				</div>

				<div className="privacy-section">
					<h2 className="section-title">3. Will Your Information Be Shared?</h2>
					<p>
						We only share information with your consent, to comply with laws, to provide you with services, 
						to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on 
						the following legal basis: Consent, Legitimate Interests, Performance of a Contract, or Legal Obligations.
					</p>
				</div>

				<div className="privacy-section">
					<h2 className="section-title">4. How Long Do We Keep Your Information?</h2>
					<p>
						We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
						When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information.
					</p>
				</div>

				<div className="privacy-section">
					<h2 className="section-title">5. Contact Us</h2>
					<p>
						If you have questions or comments about this notice, you may email us at support@movieland.com.
					</p>
				</div>
			</div>
		</div>
	);
}

export default LegalInfo;
