import * as React from "react";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import * as Scroll from "react-scroll";
import Button from "@mui/material/Button";

export default function Navigation() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true,
    });
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <MenuIcon sx={{ color: "white" }} onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        anchor={"right"}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "30%",
            backgroundColor: "white",
            padding: "1.5rem",
            overflow: "hidden",
          },
        }}
      >
        <ul>
          {location !== "contact" ? (
            // add all the buttons to navigate when on the contact page
            <>
              <li>
                <Button color="white">
                  <ScrollLink
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    onClick={() => setOpen(false)}
                  >
                    Portfolio
                  </ScrollLink>
                </Button>
              </li>
              <li>
                <Button color="white">
                  <RouterLink
                    to="/contact"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Contact
                  </RouterLink>
                </Button>
              </li>
            </>
          ) : (
            // add all the buttons to navigate when on the contact page
            <li>
              <Button
                color="white"
                onClick={() => goToPageAndScroll("portfolio")}
              >
                Portfolio
              </Button>
            </li>
          )}
        </ul>
      </Drawer>
    </div>
  );
}


