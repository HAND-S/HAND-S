import {
	Box,
	Button,
	Heading,
	Highlight,
	HStack,
	Image,
	Text,
	VStack
} from '@chakra-ui/react';
import Person from '../Images/person.png';
import { Link as RouterLink } from 'react-router-dom';

export function Home() {
	return (
		<>
			<VStack paddingY={80}>

				<Box bg={'white'} px={250} paddingY={40} borderRadius={100}>

					<Heading align={'center'} fontWeight={'bold'} fontSize={80} color={'#1A54D7'}>HAND-S</Heading>
					<Text align={'center'} paddingTop={15} fontSize={20}>
						<Highlight query={'H'} styles={{ color: '#1A54D7', fontWeight: 'bold' }}>
							H
						</Highlight>
						andwriting ‎ 
						<Highlight query={'A'} styles={{ color: '#1A54D7', fontWeight: 'bold' }}>
							A
						</Highlight>
						nalysis for ‎ 
						<Highlight query={'N'} styles={{ color: '#1A54D7', fontWeight: 'bold' }}>
							N
						</Highlight>
						europsychiatric ‎ 
						<Highlight query={'D'} styles={{ color: '#1A54D7', fontWeight: 'bold' }}>
							D
						</Highlight>
						isorders – ‎ 
						<Highlight query={'S'} styles={{ color: '#1A54D7', fontWeight: 'bold' }}>
							S
						</Highlight>
						chizophrenia ‎ 
					</Text>
					
				</Box>

				<HStack paddingTop={'50px'} paddingBottom={'70px'}>
					<Image src={Person} boxSize={'400px'} align={'left'} />
					<Box bg={'white'} px={50} paddingY={80} borderRadius={100}>
						<Text textAlign={'center'} maxW={'680px'} fontSize={'25px'}>
							Schizophrenia and Bipolar disorder are both debilitating mental illnesses that significantly affect millions of people worldwide.
							Among other symptoms, research has shown that both of these illnesses have an impact on motor skills and skew handwriting.
							HAND-S is a model that can distinguish mentally ill handwriting from healthy handwriting for free.
							This website is NOT a psychiatric diagnosis, but is an accurate screening test for mental illness. Click the button below to get tested.
						</Text>
					</Box>
				</HStack>

				<RouterLink to={'/model'}>
					<Box bg={'#407bfe'} px={250} paddingY={35} borderRadius={100} fontSize={'35px'} color={'white'}>
						<Button>
							Get Tested
						</Button>
					</Box>
				</RouterLink>

			</VStack>
		</>
	);
}