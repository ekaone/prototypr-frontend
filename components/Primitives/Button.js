import { styled } from "@stitches/react";
import { blackA, blue, mauve, slate, pinkDark, red, orange} from "@radix-ui/colors";
const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 34,
  cursor: "pointer",
  variants: {
    variant: {
      confirmBig:{
        height:'auto',
        padding:'1.2rem 2.4rem',
        background:blue.blue10,
        "&:hover": { backgroundColor: blue.blue9 },
        "&:focus": { boxShadow: `0 0 0 2px ${blue.blue12}` },
        fontSize: '1rem',
        color:'#fff',
        fontWeight: 'bold',
        lineHeight: '1.1em',
        maxWidth: '20.4375rem',
        "&[disabled]": {
          // disabled styles
          opacity: 0.5,
          cursor: "not-allowed",
        },
      },
      confirmMedium:{
        height:'auto',
        padding:'0.875rem 1rem',
        background:blue.blue10,
        "&:hover": { backgroundColor: blue.blue9 },
        "&:focus": { boxShadow: `0 0 0 2px ${blue.blue12}` },
        fontSize: '1rem',
        color:'#fff',
        fontWeight: 'bold',
        lineHeight: '1.1em',
        maxWidth: '20.4375rem',
        "&[disabled]": {
          // disabled styles
          opacity: 0.5,
          cursor: "not-allowed",
        },
      },
      confirmMediumSecondary:{
        height:'auto',
        padding:'0.875rem 1rem',
        background:blackA.blackA3,
        "&:hover": { backgroundColor: blackA.blackA4 },
        "&:focus": { boxShadow: `0 0 0 2px ${blue.blue12}` },
        fontSize: '1rem',
        color:'#333',
        fontWeight: 'bold',
        lineHeight: '1.1em',
        maxWidth: '20.4375rem',
        "&[disabled]": {
          // disabled styles
          opacity: 0.5,
          cursor: "not-allowed",
        },
      },
      confirm: {
        backgroundColor: blue.blue11,
        background: blue.blue11,
        color: "#fff",
        // boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: blue.blue10 },
        "&:focus": { boxShadow: `0 0 0 2px ${blue.blue12}` },
        "&[disabled]": {
          // disabled styles
          opacity: 0.5,
          cursor: "not-allowed",
        },
      },
      confirmRounded: {
        backgroundColor: blue.blue11,
        background: blue.blue11,
        color: "#fff",
        padding: "0.05rem 1rem",
        borderRadius:20,
        // boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: blue.blue10 },
        "&:focus": { boxShadow: `0 0 0 2px ${blue.blue12}` },
        "&[disabled]": {
          // disabled styles
          opacity: 0.5,
          cursor: "not-allowed",
        },
      },
      confirmRoundedLight: {
        backgroundColor: blue.blue9,
        background: blue.blue9,
        border:`1px solid ${blue.blue9}`,
        color: "#fff",
        padding: "0.05rem 1rem",
        borderRadius:20,
        // boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: blue.blue10 },
        "&:focus": { boxShadow: `0 0 0 2px ${blue.blue11}` },
        "&[disabled]": {
          // disabled styles
          opacity: 0.5,
          cursor: "not-allowed",
        },
      },
      red: {
        backgroundColor: red.red11,
        color: "#fff",
        // boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: red.red10 },
        "&:focus": { boxShadow: `0 0 0 2px ${red.red12}` },
        "&[disabled]": {
          // disabled styles
          opacity: 0.5,
          cursor: "not-allowed",
        },
      },

      red2: {
        backgroundColor: red.red4,
        color: red.red11,
        "&:hover": { backgroundColor: red.red5 },
        "&:focus": { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      confirmSmall:{
        backgroundColor: blue.blue11,
        color: "#fff",
        fontSize:13,
        height:28,
        padding:'0 8px',
        // boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: blue.blue10 },
        "&:focus": { boxShadow: `0 0 0 2px ${blue.blue12}` },
        "&[disabled]": {
          // disabled styles
          opacity: 0.5,
          cursor: "not-allowed",
        },
      },
      fullWidth: {
        backgroundColor: blue.blue11,
        color: "#fff",
        width:'100%',
        padding: "5px 15px",
        fontSize:16,
        // boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: blue.blue10 },
        "&:focus": { boxShadow: `0 0 0 2px ${blue.blue12}` },
        "&[disabled]": {
          // disabled styles
          opacity: 0.5,
          cursor: "not-allowed",
        },
      },
      fullWidthJob: {
        fontWeight:500,
        backgroundColor: blue.blue11,
        borderRadius:6,
        color: "#fff",
        width:'100%',
        padding: "5px 15px",
        fontSize:16,
        // boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: blue.blue10 },
        "&:focus": { boxShadow: `0 0 0 2px ${blue.blue12}` },
        "&[disabled]": {
          // disabled styles
          opacity: 0.5,
          cursor: "not-allowed",
        },
      },
      blue: {
        backgroundColor: '#fff',
        color: blue.blue11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      ghost: {
        backgroundColor: '',
        marginRight:'8px',
        color: pinkDark.pink8,
        outline:`1px solid ${pinkDark.pink8}`,
        // boxShadow: `0 2px 10px ${blackA.blackA7}`,
        // '&:hover': { outline: `1px solid ${slate.slate12}` },
        '&:hover': { color: pinkDark.pink9, outline: `1px solid ${pinkDark.pink10}` },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      ghostBlue: {
        backgroundColor: '',
        marginRight:'8px',
        color: blue.blue11,
        outline:`1px solid ${blue.blue11}`,
        // boxShadow: `0 2px 10px ${blackA.blackA7}`,
        // '&:hover': { outline: `1px solid ${slate.slate12}` },
        '&:hover': { color: blue.blue10, outline: `1px solid ${blue.blue10}` },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      ghostSmall:{
        backgroundColor: '',
        fontSize:13,
        height:28,
        padding:'0 8px',
        marginRight:'8px',
        color: pinkDark.pink8,
        outline:`1px solid ${pinkDark.pink8}`,
        '&:hover': { color: pinkDark.pink9, outline: `1px solid ${pinkDark.pink10}` },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      ghostSmallBlue:{
        backgroundColor: '',
        fontSize:13,
        height:28,
        padding:'0 8px',
        marginRight:'8px',
        color: blue.blue11,
        outline:`1px solid ${blue.blue11}`,
        '&:hover': { color: blue.blue9, outline: `1px solid ${blue.blue9}` },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      ghostSmallWarning:{
        backgroundColor: '',
        fontSize:13,
        height:28,
        padding:'0 8px',
        marginRight:'8px',
        color: orange.orange11,
        outline:`1px solid ${orange.orange11}`,
        '&:hover': { color: orange.orange9, outline: `1px solid ${orange.orange9}` },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      cancel: {
        backgroundColor: '',
        marginRight:'8px',
        color: slate.slate11,
        // boxShadow: `0 2px 10px ${blackA.blackA7}`,
        // '&:hover': { outline: `1px solid ${slate.slate12}` },
        '&:hover': { color: slate.slate12, outline: `1px solid ${slate.slate6}` },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
    },
  },

  defaultVariants: {
    variant: "confirm",
  },
});
export default Button