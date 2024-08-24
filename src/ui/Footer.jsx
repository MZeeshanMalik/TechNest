import styled from "styled-components";
import { Clock, Phone } from "styled-icons/fluentui-system-regular";
import { WebStories } from "styled-icons/material";
import { PhoneAndroid } from "styled-icons/material-rounded";
import { Number } from "styled-icons/octicons";
import Button from "./Button";
// import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #19283f;
  color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  margin: 0 10px;
  min-width: 200px;

  &:nth-child(2),
  &:nth-child(3) {
    margin: 0 30px;

    @media (max-width: 768px) {
      margin: 20px 0;
    }
  }
`;

const FooterTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 16px;
  text-transform: uppercase;
`;

const FooterText = styled.p`
  line-height: 1.8;
  font-size: 14px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 10px;
  font-size: 14px;

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  align-items: center;

  input {
    padding: 10px;
    border: none;
    border-radius: 4px 0 0 4px;
    width: 70%;
    font-size: 14px;
  }

  button {
    padding: 10px;
    color: #ffffff;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: #5f20d3;
    }
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #404d61;
  font-size: 14px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }

  p {
    margin: 5px 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterColumn>
          <span>TechNest Elenctronics</span>
          <ContactInfo>
            <p>6A Raja Chambers, Mozang Chungi, Abid Market, Lahore.</p>
            <p>
              <PhoneAndroid size={"12px"} /> 0340 1111 444
            </p>
            <p>
              <Phone height="12px" width="12px" /> 0316 1111 144
            </p>
            <p>
              <WebStories size={"12px"} /> info@alfatah.com.pk
            </p>
            <p>
              <Clock size={"12px"} /> Mon – Sat / 10:00 AM – 8:00 PM
            </p>
          </ContactInfo>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Information</FooterTitle>
          <FooterList>
            <FooterListItem>
              <a href="#">About Us</a>
            </FooterListItem>
            <FooterListItem>
              <a href="#">Become a Seller</a>
            </FooterListItem>
            <FooterListItem>
              <a href="#">Blog</a>
            </FooterListItem>
            <FooterListItem>
              <a href="#">Sitemap</a>
            </FooterListItem>
            <FooterListItem>
              <a href="#">Terms & Conditions</a>
            </FooterListItem>
          </FooterList>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Useful Links</FooterTitle>
          <FooterList>
            <FooterListItem>
              <a href="#">Shipping Policy</a>
            </FooterListItem>
            <FooterListItem>
              <a href="#">Return & Refund Policy</a>
            </FooterListItem>
            <FooterListItem>
              <a href="#">Warranty Policy</a>
            </FooterListItem>
            <FooterListItem>
              <a href="#">Track your Order</a>
            </FooterListItem>
            <FooterListItem>
              <a href="#">Order Cancellation</a>
            </FooterListItem>
            <FooterListItem>
              <a href="#">Customer Feedback</a>
            </FooterListItem>
          </FooterList>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Customer Support</FooterTitle>
          <FooterList>
            <FooterListItem>
              <a href="#">Register Complaint</a>
            </FooterListItem>
            <FooterListItem>
              <a href="#">Contact Us</a>
            </FooterListItem>
            <FooterListItem>
              <a href="#">FAQs</a>
            </FooterListItem>
          </FooterList>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Newsletter</FooterTitle>
          <FooterText>
            Subscribe to our mailing list to get the newest updates!
          </FooterText>
          <NewsletterForm>
            <input type="email" placeholder="Enter your email" />
            <Button $variant={"primary"}>SUBSCRIBE</Button>
          </NewsletterForm>
        </FooterColumn>
      </FooterTop>

      <FooterBottom>
        &copy; 2024 TechNest Electronics | All Rights Reserved. Powered By M
        Zeshan
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
