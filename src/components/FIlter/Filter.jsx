import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { setHistory } from "../../features/history/historySlice";

import {
    Button,
    Checkbox,
    Select, 
    TextField , 
    MenuItem, 
    FormControl,
    FormControlLabel 
} from "@mui/material";

export const Filter = ({handleDataUrl}) => {
    const dispatch = useDispatch()
    const history = useSelector((state) => state.history.history)
    const { control, handleSubmit, reset } = useForm();
    const [character, setCharacter] = useState(false)
    const [location, setLocation] = useState(false)
    const [episodes, setEpisodes] = useState(false)

    const [value, setValue] = useState()

    useEffect(() => {
        if(!character) {
            setValue('')
        }
    }, [character])

    useEffect(() => {
        if(!location) {
            setValue('')
        }
    }, [location])

    useEffect(() => {
        if(!episodes) {
            setValue('')
        }
    }, [episodes])

    const handleChange = (event) => {
        setValue(event.target.value)
        if(event.target.value === 'character') {
            setCharacter(event.target.checked)
        }
        if(event.target.value === 'location') {
            setLocation(event.target.checked)
        }
        if(event.target.value === 'episodes') {
            setEpisodes(event.target.checked)
        }
    };

    const onSubmit = (data) => {
        setCharacter(false)
        setLocation(false)
        setEpisodes(false)
        reset()
        setValue('')
        handleDataUrl(data);
        setDataHistory(data);
    };
    const setDataHistory = (options) => {
        if(!history.length) {
            dispatch(setHistory([options]))
        } else {
            const templateOptions = [...history]
            templateOptions.push(options)
            dispatch(setHistory(templateOptions))
        }

    }
    return (
      <div className="filter">
        <Button
            variant="contained"
            sx={{
            padding: '16.5px 46px'
            }}
        >Filter</Button>
        <div className="filter__wrap">
            <form className="filter__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="item"
                    render={({ field }) => (
                        <FormControl>
                            <label className="filter__lable" id="select-label">Select Item</label>
                            <Select
                                multiple
                                labelId="select-label"
                                sx={{
                                    position: 'relative',
                                    width: '213px',
                                    background: '#fff',
                                    borderRadius: '4px 4px 0px 0px',
                                    paddingLeft: '12px',
                                }}
                                renderValue={() => {
                                    return null
                                }}
                                { ...field }
                            >
                                <MenuItem value={'character'}>
                                    <label>
                                        <Checkbox
                                            onChange={handleChange}
                                            color="info" 
                                            checked={character}
                                            value={'character'}
                                        />
                                        Character
                                    </label>
                                </MenuItem>
                                <MenuItem value={'location'}>
                                    <label>
                                        <Checkbox
                                            onChange={handleChange}
                                            color="info" 
                                            checked={location}
                                            value={'location'} 
                                        />
                                        Location 
                                    </label>
                                </MenuItem>
                                <MenuItem value={'episodes'}>
                                <label>
                                    <Checkbox
                                        onChange={handleChange}
                                        color="info" 
                                        checked={episodes}
                                        value={'episodes'} 
                                    />
                                        Episodes 
                                    </label>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    )}
                    control={control}
                    defaultValue={[]}
                />
                {(!value?.length) ? 
                    (<TextField
                        disabled
                        sx={{
                            width: '100%',
                            maxWidth: '260px',
                            background: '#fff',
                            borderRadius: '4px 4px 0px 0px',
                        }}
                        placeholder={"Add key words to fin"}
                    />) : null
                }
                {(value?.includes("character")) ?
                <div className="filter__inner">
                    <ul className="filter__list">
                        <Controller   
                            render={({ field }) =>
                                <li className="filter__item">
                                    <TextField
                                        sx={{
                                            background: '#fff',
                                            borderRadius: '4px 4px 0px 0px',
                                        }}
                                        placeholder={'Add Name'}
                                        name={'nameCharacter'}
                                        value={field}
                                        {...field}
                                    />
                                </li>
                            }
                            name={'nameCharacter'}
                            control={control}
                            defaultValue=""
                        />
                        <Controller   
                            render={({ field }) =>
                                <li className="filter__item">
                                    <TextField
                                        sx={{
                                            background: '#fff',
                                            borderRadius: '4px 4px 0px 0px',
                                        }}
                                        placeholder={'Add Status'}
                                        name={'statusCharacter'}
                                        value={field}
                                        {...field}
                                    />
                                </li>
                            }
                            name={'statusCharacter'}
                            control={control}
                            defaultValue=""
                        />
                        <Controller   
                            render={({ field }) =>
                                <li className="filter__item">
                                    <TextField
                                        sx={{
                                            background: '#fff',
                                            borderRadius: '4px 4px 0px 0px',
                                        }}
                                        placeholder={'Add Species'}
                                        name={'speciesCharacter'}
                                        value={field}
                                        {...field}
                                    />
                                </li>
                            }
                            name={'speciesCharacter'}
                            control={control}
                            defaultValue=""
                        />
                        <Controller   
                            render={({ field }) =>
                                <li className="filter__item">
                                    <TextField
                                        sx={{
                                            background: '#fff',
                                            borderRadius: '4px 4px 0px 0px',
                                        }}
                                        placeholder={'Add Type'}
                                        name={'typeCharacter'}
                                        value={field}
                                        {...field}
                                    />
                                </li>
                            }
                            name={'typeCharacter'}
                            control={control}
                            defaultValue=""
                        />
                        <Controller   
                            render={({ field }) =>
                                <li className="filter__item">
                                    <TextField
                                        sx={{
                                            background: '#fff',
                                            borderRadius: '4px 4px 0px 0px',
                                        }}
                                        placeholder={'Add Gender'}
                                        name={'genderCharacter'}
                                        value={field}
                                        {...field}
                                    />
                                </li>
                            }
                            name={'genderCharacter'}
                            control={control}
                            defaultValue=""
                        />
                    </ul>
                </div> : null}
                {(value?.includes("location")) ?
                <div className="filter__inner">
                    <ul className="filter__list">
                        <Controller   
                            render={({ field }) =>
                                <li className="filter__item">
                                    <TextField
                                        sx={{
                                            background: '#fff',
                                            borderRadius: '4px 4px 0px 0px',
                                        }}
                                        placeholder={'Add Name'}
                                        name={'nameLocation'}
                                        value={field}
                                        {...field}
                                    />
                                </li>
                            }
                            name={'nameLocation'}
                            control={control}
                            defaultValue=""
                        />
                        <Controller   
                            render={({ field }) =>
                                <li className="filter__item">
                                    <TextField
                                        sx={{
                                            background: '#fff',
                                            borderRadius: '4px 4px 0px 0px',
                                        }}
                                        placeholder={'Add Type'}
                                        name={'typeLocation'}
                                        value={field}
                                        {...field}
                                    />
                                </li>
                            }
                            name={'typeLocation'}
                            control={control}
                            defaultValue=""
                        />
                        <Controller   
                            render={({ field }) =>
                                <li className="filter__item">
                                    <TextField
                                        sx={{
                                            background: '#fff',
                                            borderRadius: '4px 4px 0px 0px',
                                        }}
                                        placeholder={'Add Dimension'}
                                        name={'dimensionLocation'}
                                        value={field}
                                        {...field}
                                    />
                                </li>
                            }
                            name={'dimensionLocation'}
                            control={control}
                            defaultValue=""
                        />
                    </ul>
                </div> : null}
                {(value?.includes("episodes")) ?
                <div className="filter__inner">
                    <ul className="filter__list">
                        <Controller   
                            render={({ field }) =>
                                <li className="filter__item">
                                    <TextField
                                        sx={{
                                            background: '#fff',
                                            borderRadius: '4px 4px 0px 0px',
                                        }}
                                        placeholder={'Add Name'}
                                        name={'nameEpisodes'}
                                        value={field}
                                        {...field}
                                    />
                                </li>
                            }
                            name={'nameEpisodes'}
                            control={control}
                            defaultValue=""
                        />
                        <Controller   
                            render={({ field }) =>
                                <li className="filter__item">
                                    <TextField
                                        sx={{
                                            background: '#fff',
                                            borderRadius: '4px 4px 0px 0px',
                                        }}
                                        placeholder={'Add Episodes'}
                                        name={'episodesEpisodes'}
                                        value={field}
                                        {...field}
                                    />
                                </li>
                            }
                            name={'episodesEpisodes'}
                            control={control}
                            defaultValue=""
                        />
                    </ul>
                </div> : null}
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        padding: '16.5px 46px'
                    }}
                >Find</Button>
            </form>
        </div>
      </div>
    );
  }