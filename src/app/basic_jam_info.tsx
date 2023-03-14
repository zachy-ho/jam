import { gridBaselinePx } from 'app/ui/metrics/metrics';
import * as React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Flex,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import type { UseRadioProps } from '@chakra-ui/react';

const capitaliseFirstLetter = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

const RadioCard = (props: UseRadioProps & { children?: React.ReactNode }) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  return (
    <Box as='label' flex={1}>
      <input {...getInputProps()} />
      <Box
        {...getCheckboxProps()}
        cursor='pointer'
        borderRadius='md'
        borderWidth={1}
        boxShadow='md'
        paddingX={8}
        paddingY={2}
        textAlign='center'
      >
        {props.children}
      </Box>
    </Box>
  );
};

export const visibilityOptions = ['private', 'public'] as const;

type JamNameFormFieldProps = {
  jamName: string | undefined;
  onJamNameChange: (_: string) => void;
};
const JamNameFormField = React.memo((props: JamNameFormFieldProps) => {
  const handleJamNameChanged: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        props.onJamNameChange(e.target.value);
      },
      [props.onJamNameChange]
    );

  return (
    <FormControl>
      <FormLabel>Jam name</FormLabel>
      <Input
        type='text'
        onChange={handleJamNameChanged}
        value={props.jamName}
      />
    </FormControl>
  );
});
JamNameFormField.displayName = 'JamNameFormField';

type SummaryFormFieldProps = {
  summary: string | undefined;
  onSummaryChange: (_: string) => void;
};
const SummaryFormField = React.memo((props: SummaryFormFieldProps) => {
  const handleSummaryChanged: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        props.onSummaryChange(e.target.value);
      },
      [props.onSummaryChange]
    );

  return (
    <FormControl>
      <FormLabel>Summary</FormLabel>
      <Input
        type='text'
        onChange={handleSummaryChanged}
        value={props.summary}
      />
    </FormControl>
  );
});
SummaryFormField.displayName = 'SummaryFormField';

type DescriptionFormFieldProps = {
  description: string | undefined;
  onDescriptionChange: (_: string) => void;
};
const DescriptionFormField = React.memo((props: DescriptionFormFieldProps) => {
  const handleDescriptionChanged: React.ChangeEventHandler<HTMLTextAreaElement> =
    React.useCallback(
      (e) => {
        props.onDescriptionChange(e.target.value);
      },
      [props.onDescriptionChange]
    );

  return (
    <FormControl>
      <FormLabel>Description</FormLabel>
      <Textarea
        onChange={handleDescriptionChanged}
        value={props.description}
      />
    </FormControl>
  );
});
DescriptionFormField.displayName = 'DescriptionFormField';

type VisibilityFormFieldProps = {
  visibility: string | undefined;
  onVisibilityChange: (_: typeof visibilityOptions[number]) => void;
};
const VisibilityFormField = React.memo((props: VisibilityFormFieldProps) => {
  const handleVisibilityChanged: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        const visibility = e.target.value === 'public' ? 'public' : 'private';
        props.onVisibilityChange(visibility);
      },
      [props.onVisibilityChange]
    );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'visibility',
    defaultValue: 'public',
  });

  const radioCards = visibilityOptions.map((option) => (
    <RadioCard
      {...getRadioProps()}
      key={option}
      onChange={handleVisibilityChanged}
      value={option}
      isChecked={props.visibility === option}
    >
      {capitaliseFirstLetter(option)}
    </RadioCard>
  ));

  return (
    <FormControl>
      <FormLabel>Visibility</FormLabel>
      <Flex {...getRootProps} width='100%' gap={gridBaselinePx}>
        {radioCards}
      </Flex>
    </FormControl>
  );
});
VisibilityFormField.displayName = 'DescriptionFormField';

type StartDateFormFieldProps = {
  startDate: Date | undefined;
  onStartDateChange: (_: Date) => void;
};
const StartDateFormField = React.memo((props: StartDateFormFieldProps) => {
  const handleStartDateChanged: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        const date = new Date(e.target.value);
        props.onStartDateChange(date);
      },
      [props.onStartDateChange]
    );

  // TODO test `toLocaleString()` output format
  return (
    <FormControl>
      <FormLabel>StartDate</FormLabel>
      <Input
        type='datetime-local'
        onChange={handleStartDateChanged}
        value={props.startDate?.toLocaleString()}
      />
    </FormControl>
  );
});
StartDateFormField.displayName = 'DescriptionFormField';

type EndDateFormFieldProps = {
  endDate: Date | undefined;
  onEndDateChange: (_: Date) => void;
};
const EndDateFormField = React.memo((props: EndDateFormFieldProps) => {
  const handleEndDateChanged: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        const date = new Date(e.target.value);
        props.onEndDateChange(date);
      },
      [props.onEndDateChange]
    );

  return (
    <FormControl>
      <FormLabel>EndDate</FormLabel>
      <Input
        type='datetime-local'
        onChange={handleEndDateChanged}
        value={props.endDate?.toLocaleString()}
      />
    </FormControl>
  );
});
EndDateFormField.displayName = 'DescriptionFormField';

type VenueFormFieldProps = {
  venue: string | undefined;
  onVenueChange: (_: string) => void;
};
const VenueFormField = React.memo((props: VenueFormFieldProps) => {
  const handleVenueChanged: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        props.onVenueChange(e.target.value);
      },
      [props.onVenueChange]
    );

  return (
    <FormControl>
      <FormLabel>Venue</FormLabel>
      <Input type='text' onChange={handleVenueChanged} value={props.venue} />
    </FormControl>
  );
});
VenueFormField.displayName = 'VenueFormField';

type BasicJamInfoProps = JamNameFormFieldProps &
  SummaryFormFieldProps &
  DescriptionFormFieldProps &
  VisibilityFormFieldProps &
  StartDateFormFieldProps &
  EndDateFormFieldProps &
  VenueFormFieldProps;

export const BasicJamInfo = (props: BasicJamInfoProps) => (
  <Stack padding={gridBaselinePx}>
    <JamNameFormField
      jamName={props.jamName}
      onJamNameChange={props.onJamNameChange}
    />
    <SummaryFormField
      summary={props.summary}
      onSummaryChange={props.onSummaryChange}
    />
    <DescriptionFormField
      description={props.description}
      onDescriptionChange={props.onDescriptionChange}
    />
    <VisibilityFormField
      visibility={props.visibility}
      onVisibilityChange={props.onVisibilityChange}
    />
    <StartDateFormField
      startDate={props.startDate}
      onStartDateChange={props.onStartDateChange}
    />
    <EndDateFormField
      endDate={props.endDate}
      onEndDateChange={props.onEndDateChange}
    />
    <VenueFormField venue={props.venue} onVenueChange={props.onVenueChange} />
  </Stack>
);
