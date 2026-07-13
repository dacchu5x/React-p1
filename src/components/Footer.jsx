import styled from "styled-components";
import {
  FaFacebookF,
  FaXTwitter,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";

const Footer = () => {
  return (
    <Container>
      <Top>

        <Section>
          <h3>Company</h3>

          <p>About Us</p>
          <p>Careers</p>
        </Section>

        <Section>
          <h3>View Website in</h3>

          <Language>
            <IoChevronDown />
            <span style={{ color: "#9da4b5", fontSize: "15px" }}>English</span>
          </Language>
        </Section>

        <Section>
          <h3>Need Help?</h3>

          <p>Visit Help Center</p>
          <p>Share Feedback</p>
        </Section>

        <Section>
          <h3>Connect with Us</h3>

          <Icons>
            <FaFacebookF />
            <FaXTwitter />
          </Icons>

          <StoreButtons>

            <Store>
              <FaGooglePlay />
              <div>
                <small>GET IT ON</small>
                <h4>Google Play</h4>
              </div>
            </Store>

            <Store>
              <FaApple />
              <div>
                <small>Download on the</small>
                <h4>App Store</h4>
              </div>
            </Store>

          </StoreButtons>
        </Section>

      </Top>

      <Bottom>
        <p>© 2026 STAR. All Rights Reserved.</p>

        <Links>
          <span>Terms Of Use</span>
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </Links>
      </Bottom>
    </Container>
  );
};

export default Footer;
const Container = styled.footer`
  background:#000000;
  color:#fff;
  padding:60px 90px 30px;
  
`;

const Top = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
`;

const Section = styled.div`
  display:flex;
  flex-direction:column;
  gap:18px;

  h3{
    font-size:25px;
    margin-bottom:10px;
  }

  p{
    color:#9da4b5;
    cursor:pointer;
    font-size:15px;
    transition:.3s;
  }

  p:hover{
    color:white;
  }
`;

const Language = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  color:#9da4b5;
  font-size:22px;
`;

const Icons = styled.div`
  display:flex;
  gap:25px;
  font-size:25px;
  margin-bottom:20px;

  svg{
    cursor:pointer;
    transition:.3s;
  }

  svg:hover{
    color:white;
    transform:scale(1.1);
  }
`;

const StoreButtons = styled.div`
  display:flex;
  gap:18px;
`;

const Store = styled.div`
  display:flex;
  align-items:center;
  gap:12px;
  background:#1a1414;
  border:1px solid #333;
  border-radius:8px;
  padding:5px 10px;
  cursor:pointer;

  svg{
    font-size:25px;
  }

  small{
    color:#bbb;
    font-size:10px;
  }

  h4{
    margin:0;
    font-size:17px;
  }
`;

const Bottom = styled.div`
  margin-top:60px;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;

  p{
    color:#8c93a6;
    font-size:15px;
  }
`;

const Links = styled.div`
  display:flex;
  gap:35px;

  span{
    color:#8c93a6;
    cursor:pointer;
    font-size:15px;
    transition:.3s;
  }

  span:hover{
    color:white;
  }
`;