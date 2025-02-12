import React from "react";
import IcoFacebook from "../asesst/Icons/icoFacebook";
import Ico_Instagram from "../asesst/Icons/Ico_instagram";
import Ico_Twitter from "../asesst/Icons/Ico_twitter";
import { fadein } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function Main(){
    return(
        <Flex dir={"column"} justify="around" css={{

            width: "100%",
            height: "100%",
            opacity: "0",
            animation: `1s ease-in 1s 1 both ${fadein}`,

        }}>

            <Text css={{
                display1: "700",
                paddingTop: "$7",
                "@bp2": {
                    display2: "800",
                },
                "@bp4": {
                    display3: "800"
                },
                "@bp5": {
                    headline1: "800"
                }

            }}>
                This template is intended <br/>
                to familiarize you <br />
                with the capabilities<br/>
                of the L1veStack service
            </Text>
            <Text css={{
                paddingTop: "$1",
                paddingLeft: "$2",
                subhead1: "500",
                "@bp4": {
                    paddingTop: "$1",
                    subhead1: "400"
                }

            }}>
                <Text css={{ marginBottom: "$2",   display3: "600",}}>dependencies</Text>
                <ul>
                    <li>@stitches/react: ^1.2.8</li>
                    <li>@testing-library/jest-dom: ^5.16.4</li>
                    <li>@testing-library/react: ^13.3.0</li>
                    <li>@testing-library/user-event: ^13.5.0</li>
                    <li>@types/jest: ^27.5.2</li>
                    <li>@types/node: ^16.11.41</li>
                    <li>@types/react: ^18.0.14</li>
                    <li>@types/react-dom: ^18.0.5</li>
                    <li>react: ^18.2.0</li>
                    <li>react-dom: ^18.2.0</li>
                    <li>react-scripts: 5.0.1</li>
                    <li>typescript: ^4.7.4</li>
                    <li>web-vitals: ^2.1.4</li>
                    <li>zustand: ^4.0.0-rc.1</li>
                </ul>
            </Text>

            <Flex css={{
                paddingTop: "$5"
            }}>
                <Text cursor={"click"} css={{

                    color: "$onPrimary",
                    backgroundColor: "$primary",
                    headline6: "600",
                    padding: "$1 $3",
                    borderRadius: "8px",
                    boxShadow: "$1dp",
                    "&:hover": {
                        color: "$primary",
                        backgroundColor: "$primary200",
                    },
                    "&:active": {
                        boxShadow: "none",
                        color: "$onPrimary",
                        backgroundColor: "$primary600",
                    }
                }}>
                    Book Now
                </Text>
                <Text cursor={"click"} css={{
                    border: "1px solid $primary",
                    color: "$primary",
                    backgroundColor: "$primary200",
                    headline6: "600",
                    padding: "$1 $3",
                    borderRadius: "8px",
                    marginLeft: "$3",
                    "&:hover": {
                        color: "$primary",
                        backgroundColor: "$primary600",
                    },
                    "&:active": {
                        boxShadow: "none",
                        color: "$onPrimary",
                    }
                }}>
                    Know More
                </Text>
            </Flex>

            <Flex justify={"end"} css={{
                width: "100%",
                // backgroundColor:"$onBg",
                // paddingTop:"$6",
                "& svg": {
                    fill: "$onBg800",
                    cursor: "pointer",
                    marginRight: "$3",
                    "&:hover": {
                        fill: "$onBg",
                        transform: "scale(1.1)",
                        // transition:"all 0.5s",

                    }
                }
            }}>
                <IcoFacebook width="32" height="32"/>
                <Ico_Instagram width="32" height="32"/>
                <Ico_Twitter width="32" height="32"/>
            </Flex>

        </Flex>
    )
}


export default Main