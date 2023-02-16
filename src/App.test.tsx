import {
  fireEvent,
  getByLabelText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { rest } from 'msw';
import renderer from "react-test-renderer";
import App from "./App";
import { setupServer } from 'msw/node';
import MainBody from './components/MainBody';

describe("App component snapshot test UI", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});



const API_KEY = "2f5IdnsL4eoPjdcERC1vvB1rbF8VDq5Deh4cc2XQ";

const handlers = [
  rest.get(`https://api.nasa.gov/neo/rest/v1/neo/12345?api_key=${API_KEY}`, (req, res, ctx) => {
    return res(ctx.json({
      id: "12345",
      name: "Mock Astroid",
      nasa_jpl_url: "https://www.nasa.gov/asteroids-comets-timeline#/map",
      is_potentially_hazardous_asteroid: true
    }))
  })
];


const server = setupServer(
  rest.get('https://api.nasa.gov/neo/rest/v1/neo/12345?api_key=2f5IdnsL4eoPjdcERC1vvB1rbF8VDq5Deh4cc2XQ', (req, res, ctx) => {
    return res(ctx.json({
      id: "3542519",
      name: "(2010 PK9)",
      nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3542519",
      is_potentially_hazardous_asteroid: true
    }))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('MainBody', () => {
  test('renders the asteroid data', async () => {
    render(<MainBody showLoader={false} setShowLoader={jest.fn()} inputValue="12345" />);

    const asteroidName = await screen.findByText(/Mock Astroid/i);
    const asteroidUrl = await screen.findByText(/https:\/\/www.nasa.gov\/asteroids-comets-timeline#\/map/i);
    const isHazardous = await screen.findByText(/YES/i);

    expect(asteroidName).toBeInTheDocument();
    expect(asteroidUrl).toBeInTheDocument();
    expect(isHazardous).toBeInTheDocument();
  });
});








