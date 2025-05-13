import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";
import { motion } from "framer-motion";

interface NavItemProps {
  to: string;
  end?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({
  to,
  end,
  children,
  onClick,
}) => (
  <>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? classes["active-link"] : undefined
      }
      end={end}
      onClick={onClick}
    >
      {({ isActive }) => (
        <div className={classes.navItem}>
          {children}
          {isActive && (
            <motion.div
              data-testid="tab-indicator"
              layoutId="tab-indicator"
              className={classes["active-tab"]}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      )}
    </NavLink>
  </>
);
