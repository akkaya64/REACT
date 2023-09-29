import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home";
import UserLayout from "../layouts/user-layout";
import Jsx1 from "../components/02-jsx/01-jsx";
import Jsx2 from "../components/02-jsx/02-jsx";
import Jsx3 from "../components/02-jsx/03-jsx";
import Jsx4 from "../components/02-jsx/04-jsx";
import InlineStyling from "../components/03-styles/01-inline-styling";
import InternalStyling from "../components/03-styles/02-internal-styling";
import ExternalStyling from "../components/03-styles/03-external-styling";
import ModuleStyling from "../components/03-styles/04-module-styling";
import Sass from "../components/03-styles/05-sass";
import DigitalClockAppV1 from "../components/04-digital-clock-app-v1/04-digital-clock-app-v1";
import DigitalClockAppV2 from "../components/06-digital-clock-app-v2/06-digital-clock-app-v2";
import DigitalClockAppV3 from "../components/18-digital-clock-app-v3/18-digital-clock-app-v3";
import Greetings from "../components/05-props/01-greetings";
import Children from "../components/05-props/04-children";
import Image from "../components/07-images/01-images";
import ImageGallery from "../components/07-images/02-image-galleries";
import ProfileCard from "../components/08-profile-card/profile-card";
import BootstrapKlasikYontem from "../components/09-bootstrap/01-bootstrap-klasik-yontem";
import BootstrapComponents from "../components/09-bootstrap/02-bootstrap-components";
import BootstrapButtons from "../components/09-bootstrap/03-bootstrap-buttons";
import ReactIcons from "../components/10-icons/01-react-icons";
import MaterialIcons from "../components/10-icons/02-material-icons";
import Events from "../components/11-events/events";
import ProductShop from "../components/12-product-shop/product-shop";
import State from "../components/13-usestate/state";
import Counter from "../components/14-counter/counter";
import Birthday from "../components/15-birthday/Birthday";
import UseEffect from "../components/16-useeffect/UseEffect";
import CounterTitle from "../components/17-counter-title/CounterTitle";
import UseRef from "../components/19-useref/UseRef";
import ClassTypeComponent from "../components/20-component-types/ClassTypeComponent";
import FunctionTypeComponent from "../components/20-component-types/FunctionTypeComponent";
import Fetch1 from "../components/21-fetch/01-Fetch";
import Fetch02 from "../components/21-fetch/02-Fetch";
import Countries from "../components/22-axios/Countries";
import ParentComponent from "../components/23-lifting-satates/ParentComponent";
import Form from "../components/24-forms/01-Form";
import Form02 from "../components/24-forms/02-Form";
import Form03 from "../components/24-forms/03-Form";
import Form04 from "../components/24-forms/04-Form";
import Form05 from "../components/24-forms/05-Form";
import FormikYub01 from "../components/25-formik-yup/FormikYub01";
import FormikYup02 from "../components/25-formik-yup/FormikYup02";
import { Bananas, Pears } from "../components/01-my-house/01-my-house";
import Users from "../components/26-react-router/users";
import UserDetails from "../components/26-react-router/user-details";
//import '../../src/'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "x",
        //element: <X/>
      },
      {
        path: "pears",
        element: <Pears />,
      },
      {
        path: "bananas",
        element: <Bananas />,
      },
      {
        path: "jsx",
        children: [
          {
            index: true,
            element: <Jsx1 />,
          },
          {
            path: "2",
            element: <Jsx2 />,
          },
          {
            path: "3",
            element: <Jsx3 />,
          },
          {
            path: "4",
            element: <Jsx4 />,
          },
        ],
      },
      {
        path: "styles",
        children: [
          {
            index: true,
            element: <InlineStyling />,
          },
          {
            path: "internal-styling",
            element: <InternalStyling />,
          },
          {
            path: "external-styling",
            element: <ExternalStyling />,
          },
          {
            path: "module-styling",
            element: <ModuleStyling />,
          },
          {
            path: "sass",
            element: <Sass />,
          },
        ],
      },
      {
        path: "digital-clock-app",
        children: [
          {
            index: true,
            element: <DigitalClockAppV1 />,
          },
          {
            path: "v1",
            element: <DigitalClockAppV1 />,
          },
          {
            path: "v2",
            element: (
              <DigitalClockAppV2 color="teal" backgroundColor="darkkhaki" />
            ),
          },
          {
            path: "v3",
            element: (
              <DigitalClockAppV3 color="white" backgroundColor="crimson" />
            ),
          },
        ],
      },
      {
        path: "greating",
        children: [
          {
            index: true,
            element: <Greetings />,
          },
        ],
      },
      {
        path: "children",
        element: (
          <Children>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            recusandae exercitationem molestias, rerum ducimus consequuntur
            cumque sunt, labore nisi doloribus beatae voluptate reprehenderit,
            est minima tempora tempore itaque impedit officia. Aut, omnis.
            Adipisci ipsa harum nesciunt explicabo animi quam error illo
            accusamus in placeat deleniti nihil maxime ut dolore, iure aperiam
            quis ullam. Mollitia ipsa, architecto dolorum quasi molestiae
            facere.
          </Children>
        ),
      },
      {
        path: "image",
        children: [
          {
            index: true,
            element: <Image style={{ width: "100%", height: "auto" }} />,
          },
          {
            path: "gallery",
            element: <ImageGallery />,
          },
        ],
      },
      {
        path: "profile-card",
        element: (
          <ProfileCard
            src="profile.jpg"
            name="Zisan"
            location="Istanbul, Turkey"
            statistics={[
              {
                stat: 8,
                title: "Shot",
              },
              {
                stat: 1000,
                title: "Followers",
              },
              {
                stat: 50,
                title: "Following",
              },
            ]}
          />
        ),
      },
      {
        path: "bootstrap",
        children: [
          {
            index: true,
            element: <BootstrapKlasikYontem />,
          },
          {
            path: "klasik-yontem",
            element: <BootstrapKlasikYontem />,
          },
          {
            path: "react-bootstrap",
            element: <BootstrapComponents />,
          },
          {
            path: "button",
            element: <BootstrapButtons variant="outline-primary" disabled />,
          },
        ],
      },
      {
        path: "icons",
        children: [
          {
            index: true,
            element: <ReactIcons />,
          },
          {
            path: "react-icons",
            element: <ReactIcons />,
          },
          {
            path: "material-icons",
            element: <MaterialIcons />,
          },
        ],
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "product-shop",
        element: <ProductShop />,
      },
      {
        path: "state",
        element: <State />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "birthday",
        element: <Birthday />,
      },
      {
        path: "useeffect",
        element: <UseEffect />,
      },
      {
        path: "counter-title",
        element: <CounterTitle />,
      },
      {
        path: "useref",
        element: <UseRef />,
      },
      {
        path: "component-types",
        children: [
          {
            index: true,
            element: <ClassTypeComponent />,
          },
          {
            path: "class-type-component",
            element: <ClassTypeComponent />,
          },
          {
            path: "function-type-component",
            element: <FunctionTypeComponent />,
          },
        ],
      },
      {
        path: "fetch",
        children: [
          {
            index: true,
            element: <Fetch1 />,
          },
          {
            path: "1",
            element: <Fetch1 />,
          },
          {
            path: "2",
            element: <Fetch02 />,
          },
        ],
      },
      {
        path: "countries",
        element: <Countries />,
      },
      {
        path: "parent-component",
        element: <ParentComponent />,
      },
      {
        path: "form",
        children: [
          {
            index: true,
            element: <Form />,
          },
          {
            path: "1",
            element: <Form />,
          },
          {
            path: "2",
            element: <Form02 />,
          },
          {
            path: "3",
            element: <Form03 />,
          },
          {
            path: "4",
            element: <Form04 />,
          },
          {
            path: "5",
            children: [
              {
                index: true,
                element: <Form05 />,
              },
              {
                path: ":formId",
                element: <Form05 />,
              },
            ],
          },
        ],
      },
      {
        path: "formik-yup",
        children: [
          {
            index: true,
            element: <FormikYub01 />,
          },
          {
            path: "1",
            element: <FormikYub01 />,
          },
          {
            path: "2",
            element: <FormikYup02 />,
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <Users />
          },
          {
            path: ":userId",
            element: <UserDetails />
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);
