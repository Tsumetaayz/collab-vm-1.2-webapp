import { Language } from "./i18n.js";

const fallbackLanguage : Language = {
	"languageName": "English (US)",
	"translatedLanguageName": "English (US)",
	"flag": "🇺🇸",
	"author": "Computernewb",

	"stringKeys": {
		"kGeneric_CollabVM": "UserVM",
		"kGeneric_Yes": "Yes",
		"kGeneric_No": "No",
		"kGeneric_Ok": "OK",
		"kGeneric_Cancel": "Cancel",
		"kGeneric_Send": "Send",
		"kGeneric_Understood": "Understood",
		"kGeneric_Username": "Username",
		"kGeneric_Password": "Password",
		"kGeneric_Login": "Log in",
		"kGeneric_Register": "Register",
		"kGeneric_EMail": "E-Mail",
		"kGeneric_DateOfBirth": "Date of Birth",
		"kGeneric_VerificationCode": "Verification Code",
		"kGeneric_Verify": "Verify",
		"kGeneric_Update": "Update",
		"kGeneric_Logout": "Log out",
		
		"kWelcomeModal_Header": "Welcome to UserVM",
		"kWelcomeModal_Body": "<p>Welcome to UserVM! This page contains virtual machines run by members of the CollabVM community. Please keep the following in mind:</p> <ul> <li>These VMs are not run or moderated by Computernewb or the CollabVM staff, and we are not responsible for their content.</li> <li>With that in mind, CollabVM rules 1-5 still apply to these VMs. Please report any violations to the VM owner. Report violations by VM staff to the CollabVM staff.</li> <li>VMs may have their own rules that you are expected to follow. Please read the rules of the VM you are using.</li> </ul> <h3>NSFW Warning</h3> Please note that NSFW content may show up on some of these VMs. We try to add a blur and a warning to the VMs that might have NSFW content, but we can't guarantee that nothing will slip through.",

		"kSiteButtons_Home": "Home",
		"kSiteButtons_FAQ": "FAQ",
		"kSiteButtons_Rules": "Rules",
		"kSiteButtons_DarkMode": "Dark Mode",
		"kSiteButtons_LightMode": "Light Mode",

		"kVM_UsersOnlineText": "Users Online:",

		"kVM_TurnTimeTimer": "Turn expires in {0} seconds.",
		"kVM_WaitingTurnTimer": "Waiting for turn in {0} seconds.",
		"kVM_VoteCooldownTimer": "Please wait {0} seconds before starting another vote.",

		"kVM_VoteForResetTitle": "Do you want to reset the VM?",
		"kVM_VoteForResetTimer": "Vote ends in {0} seconds",

		"kVMButtons_TakeTurn": "Take Turn",
		"kVMButtons_EndTurn": "End Turn",
		"kVMButtons_ChangeUsername": "Change Username",
		"kVMButtons_Keyboard": "Keyboard",
		"KVMButtons_CtrlAltDel": "Ctrl+Alt+Del",

		"kVMButtons_VoteForReset": "Vote For Reset",
		"kVMButtons_Screenshot": "Screenshot",

		"kQEMUMonitor": "QEMU Monitor",
		"kAdminVMButtons_PassVote": "Pass Vote",
		"kAdminVMButtons_CancelVote": "Cancel Vote",

		"kAdminVMButtons_Restore": "Restore",
		"kAdminVMButtons_Reboot": "Reboot",
		"kAdminVMButtons_ClearTurnQueue": "Clear Turn Queue",
		"kAdminVMButtons_BypassTurn": "Bypass Turn",
		"kAdminVMButtons_IndefiniteTurn": "Indefinite Turn",

		"kAdminVMButtons_Ban": "Ban",
		"kAdminVMButtons_Kick": "Kick",
		"kAdminVMButtons_TempMute": "Temporary Mute",
		"kAdminVMButtons_IndefMute": "Indefinite Mute",
		"kAdminVMButtons_Unmute": "Unmute",
		"kAdminVMButtons_GetIP": "Get IP",

		"kVMPrompts_AdminChangeUsernamePrompt": "Enter new username for {0}:",
		"kVMPrompts_AdminRestoreVMPrompt": "Are you sure you want to restore the VM?",
		"kVMPrompts_EnterNewUsernamePrompt": "Enter a new username, or leave the field blank to be assigned a guest username",

		"kError_UnexpectedDisconnection": "You have been disconnected from the server.",
		"kError_UsernameTaken": "That username is already taken",
		"kError_UsernameInvalid": "Usernames can contain only numbers, letters, spaces, dashes, underscores, and dots, and it must be between 3 and 20 characters.",
		"kError_UsernameBlacklisted": "That username has been blacklisted.",
		"kError_IncorrectPassword": "Incorrect password.",

		"kAccountModal_Verify": "Verify E-Mail",
		"kAccountModal_AccountSettings": "Account Settings",
		"kAccountModal_ResetPassword": "Reset Password",

		"kAccountModal_NewPassword": "New Password",
		"kAccountModal_ConfirmNewPassword": "Confirm New Password",
		"kAccountModal_CurrentPassword": "Current Password",
		"kAccountModal_ConfirmPassword": "Confirm Password",

		"kMissingCaptcha": "Please fill out the captcha.",
		"kPasswordsMustMatch": "Passwords must match.",
		"kAccountModal_VerifyText": "We sent an E-Mail to {0}. To verify your account, please enter the 8-digit code from the E-Mail below.",
		"kAccountModal_VerifyPasswordResetText": "We sent an E-Mail to {0}. To reset your password, please enter the 8-digit code from the E-Mail below.",
		"kAccountModal_PasswordResetSuccess": "Your password has been changed successfully. You can now log in with your new password.",

		"kNotLoggedIn": "Not Logged in"
	}
}

export default fallbackLanguage;