'use client';

import {
  gridBaselinePx,
  smallPageMarginsPx,
  mediumPageMarginsPx,
  largePageMarginsPx,
} from 'app/ui/metrics/metrics';
import * as React from 'react';
import { create } from 'zustand';
import {
  Box,
  Divider,
  Text,
} from '@chakra-ui/react';
import { visibilityOptions, BasicJamInfo } from './basic_jam_info';

const useCreateJamStore = create<{
  jamName: string | undefined;
  summary: string | undefined;
  description: string | undefined;
  visibility: typeof visibilityOptions[number];
  startDate: Date | undefined;
  endDate: Date | undefined;
  venue: string | undefined;
}>(() => ({
  jamName: undefined,
  summary: undefined,
  description: undefined,
  visibility: 'public',
  startDate: undefined,
  endDate: undefined,
  venue: undefined,
}));

// Presenter
const createJamPresenter = {
  setJamName: (jamName: string) => {
    useCreateJamStore.setState({ jamName });
  },
  setSummary: (summary: string) => {
    useCreateJamStore.setState({ summary });
  },
  setDescription: (description: string) => {
    useCreateJamStore.setState({ description });
  },
  setVisibility: (visibility: 'private' | 'public') => {
    useCreateJamStore.setState({ visibility });
  },
  setStartDate: (startDate: Date) => {
    useCreateJamStore.setState({ startDate });
  },
  setEndDate: (endDate: Date) => {
    useCreateJamStore.setState({ endDate });
  },
  setVenue: (venue: string) => {
    useCreateJamStore.setState({ venue });
  },
};


const CreateJamForm = () => {
  const store = useCreateJamStore();

  return (
    <Box as='main' borderWidth={1} borderRadius='md' padding={0} width='100%'>
      <Box paddingX={gridBaselinePx} paddingY={gridBaselinePx / 2}>
        <Text as='span' fontSize='2xl' margin={0} padding={0} maxWidth='100%'>
          Create a Jam
        </Text>
      </Box>
      <Divider size='lg' />
      <BasicJamInfo
        jamName={store.jamName}
        summary={store.summary}
        description={store.description}
        visibility={store.visibility}
        startDate={store.startDate}
        endDate={store.endDate}
        venue={store.venue}
        onJamNameChange={createJamPresenter.setJamName}
        onSummaryChange={createJamPresenter.setSummary}
        onDescriptionChange={createJamPresenter.setDescription}
        onVisibilityChange={createJamPresenter.setVisibility}
        onStartDateChange={createJamPresenter.setStartDate}
        onEndDateChange={createJamPresenter.setEndDate}
        onVenueChange={createJamPresenter.setVenue}
      />
    </Box>
  );
};

const Home = () => (
  <Box
    maxWidth={{
      base: `${320 - 2 * smallPageMarginsPx}px`,
      sm: `${480 - 2 * mediumPageMarginsPx}px`,
      md: `${768 - 2 * largePageMarginsPx}px`,
    }}
    margin='auto'
    marginTop={gridBaselinePx * 4}
  >
    <CreateJamForm />
  </Box>
);

export default Home;
