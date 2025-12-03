// Icon utility for centralized icon imports
// Ionicons, Hugeicons, Doodle Icons, and SVGRepo Icons

// ============================================
// Icon Library Usage Guide
// ============================================

// 1. IONICONS (react-ionicons)
//    import { IconName } from "react-ionicons";
//    <IconName />

// 2. HUGEICONS (hugeicons-react)
//    import { IconName } from "hugeicons-react";
//    <IconName />

// 3. DOODLE ICONS
//    Download from khushmeen.com/icons.html
//    Store in: public/icons/doodle/ or components/icons/
//    Import as: import DoodleIcon from "@/public/icons/doodle/icon-name.svg";
//    Use with: <SvgIcon src={DoodleIcon} size={24} />

// 4. SVGREPO ICONS (https://www.svgrepo.com/)
//    Download SVG from SVGRepo (free, CC0 license)
//    Store in: public/icons/svgrepo/your-icon.svg
//    
//    Option A - As image:
//    import { SvgIcon } from "@/components/icons/SvgIcon";
//    <SvgIcon src="/icons/svgrepo/your-icon.svg" size={24} />
//    
//    Option B - As React component (if using @svgr/webpack):
//    import IconName from "@/public/icons/svgrepo/icon-name.svg";
//    <SvgIcon src={IconName} size={24} />

// Export commonly used icon components
export { SvgIcon } from "@/components/icons/SvgIcon";

