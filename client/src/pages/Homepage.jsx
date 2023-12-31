import { Center, Grid, Title, Text, Image, BackgroundImage, Container } from "@mantine/core"
import { Link } from "react-router-dom"
import styled from "styled-components"
// Images
import ChildrenLearning from "../Assets/children-learning.jpg"
import KidsPlaying from "../Assets/kids-playing.jpg"
import KidsStudying from "../Assets/kids-studying.jpg"
import FingerPainting from "../Assets/finger-painting.jpg"
import BlockStacking from "../Assets/block-stacking.jpg"
import BlueSky from "../Assets/blue-sky.jpg"
import Logo from "../Assets/Logo.webp"

import { DarkOrangeHorizon, OrangeHorizon } from '../styles/gradiants'

const CTA = styled(Link)`
    ${OrangeHorizon}
    color: #fff;
    margin: 20px;
    display: block;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;
    &:hover {
        ${DarkOrangeHorizon}
    }
`


const Homepage = () => {
    return (
        <>
            <Container>
                <Grid>
                    <Grid.Col span={12}>
                        <Center p="md">
                            <Title order={1} align="center">Tutoriffic</Title>
                        </Center>
                    </Grid.Col>
                </Grid>
            </Container>
            <Container fluid px="0.5rem">
                <Grid grow>
                    <BackgroundImage src={ChildrenLearning}>
                        <Grid.Col span={4}>
                            <Center p="md">
                                <Image maw={200} src={Logo} alt="" />
                            </Center>
                            <Center mx="20%" bg="rgba(0,0,0,0.5)" sx={{ borderRadius: "10px" }}>
                                <Text p={10} color="#fff" align="center">
                                    Welcome to Tutoriffic – Where Learning Meets Fun! Ignite your child's curiosity in a universe of discovery and adventure. Learning has never been this exciting. Get started on this fun-filled voyage today!
                                </Text>
                            </Center>
                        </Grid.Col>
                    </BackgroundImage>
                </Grid>
            </Container>
            <Container>
                <Grid>
                    <Grid.Col sm={12} md={6} px={0}>
                        <Image src={KidsStudying} height={300} />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6}>
                        <Center p="md">
                            <Text color="#000">
                                <Title order={2} align="center">About Us</Title>
                                At Tutoriffic, we're transforming education into an exhilarating journey of discovery. Our mission? To inspire a love of learning in your child, nurture their curiosity, and set them up for success. Dive into our all-inclusive educational playground filled with engaging games, thrilling videos, captivating stories, and interactive lessons across subjects. Here, learning is a pleasure, not a chore.
                            </Text>
                        </Center>
                    </Grid.Col>
                </Grid>
                <Grid >
                    <Grid.Col sm={12} md={6} orderMd={2} orderSm={1} px={0} pt={0}>
                        <Image src={KidsPlaying} height={300} />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6} order={1}>
                        <Center p="md">
                            <Text color="#000">
                                <Title order={2} align="center">Curriculum Section</Title>
                                We cater to your child's educational needs with tailor-made content in Math, Science, Language Arts, Social Studies, and more! Our curriculum matches your child's grade level and learning style. Plus, we go beyond academics, promoting holistic development by integrating essential life skills and values within our lessons. Experience the Tutoriffic difference!
                            </Text>
                        </Center>
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col sm={12} md={6} px={0} pt={0}>
                        <Image src={FingerPainting} height={300} />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6}>
                        <Center p="md">
                            <Text color="#000">
                                <Title order={2} align="center">Unique Feature Section</Title>
                                Discoverthe Student Portal! This special aspect of our platform stimulates creative thinking, enhances emotional intelligence, and fosters responsible digital citizenship. We believe in nurturing not just academics, but the whole child.
                            </Text>
                        </Center>
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col sm={12} md={6} orderMd={2} orderSm={1} px={0} pt={0}>
                        <Image src={BlockStacking} height={300} />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6} order={1}>
                        <Center p="md">
                            <Text color="#000">
                                <Title order={2} align="center">Safety and Privacy Section</Title>
                                Your child's safety is our top priority. At Tutoriffic, we've put robust security measures in place to create a safe and secure learning environment. Rest easy knowing our portal is 100% ad-free and fully respects your family’s privacy.
                            </Text>
                        </Center>
                    </Grid.Col>
                </Grid>
            </Container>
            <Container fluid px="0.5rem">
                <Grid grow>
                    <BackgroundImage src={BlueSky}>
                        <Grid.Col span={12}>
                            <Center p="md">
                                <Text color="#fff">
                                    Ready to experience a revolution in learning? Join Tutoriffic – the ultimate kids' learning portal where the love for learning never stops growing. Unleash the power of learning today. Embark on a journey filled with fun, creativity, and knowledge with us now!
                                </Text>
                            </Center>
                            <Center p="md">
                                <Text color="#fff">
                                    <Title order={3} align="center">Join Now</Title>
                                    <CTA to="/signup">Register</CTA>
                                </Text>
                            </Center>
                        </Grid.Col>
                    </BackgroundImage>
                </Grid>
            </Container>
        </>
    )
}
export default Homepage