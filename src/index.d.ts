import * as React from 'react';

export namespace ReactSpinners {
	interface CommonProps {
		color?: string;
		loading?: boolean;
	}

	interface BarLoaderProps extends CommonProps {
		height?: number;
		width?: number;
	}

	interface BeatLoaderProps extends CommonProps {
		margin?: string;
		size?: number;
	}

	interface BounceLoaderProps extends CommonProps {
		size?: number;
	}

	interface CircleLoaderProps extends CommonProps {
		size?: number;
	}

	interface ClipLoaderProps extends CommonProps {
		size?: number;
	}

	interface ClimbingBoxLoaderProps extends CommonProps {
		size?: number;
	}

	interface DotLoaderProps extends CommonProps {
		margin?: string;
		size?: number;
	}

	interface FadeLoaderProps extends CommonProps {
		height?: number;
		margin?: string;
		radius?: number;
		width?: number;
	}

	interface GridLoaderProps extends CommonProps {
		size?: number;
	}

	interface HashLoaderProps extends CommonProps {
		margin?: string;
		size?: number;
	}

	interface MoonLoaderProps extends CommonProps {
		margin?: string;
		size?: number;
	}

	interface PacmanLoaderProps extends CommonProps {
		margin?: string;
		size?: number;
	}

	interface PropagateLoaderProps extends CommonProps {
		size?: number;
	}

	interface PulseLoaderProps extends CommonProps {
		margin?: string;
		size?: number;
	}

	interface RingLoaderProps extends CommonProps {
		margin?: string;
		size?: number;
	}

	interface RiseLoaderProps extends CommonProps {
		margin?: string;
		size?: number;
	}

	interface RotateLoaderProps extends CommonProps {
		margin?: string;
		size?: number;
	}

	interface ScaleLoaderProps extends CommonProps {
		height?: number;
		margin?: string;
		radius?: number;
		width?: number;
	}

	interface SyncLoaderProps extends CommonProps {
		margin?: string;
		size?: number;
	}
}

export class BarLoader extends React.Component<ReactSpinners.BarLoaderProps> {}
export class BeatLoader extends React.Component<ReactSpinners.BeatLoaderProps> {}
export class BounceLoader extends React.Component<ReactSpinners.BounceLoaderProps> {}
export class CircleLoader extends React.Component<ReactSpinners.CircleLoaderProps> {}
export class ClipLoader extends React.Component<ReactSpinners.ClipLoaderProps> {}
export class ClimbingBoxLoader extends React.Component<ReactSpinners.ClimbingBoxLoaderProps> {}
export class DotLoader extends React.Component<ReactSpinners.DotLoaderProps> {}
export class FadeLoader extends React.Component<ReactSpinners.FadeLoaderProps> {}
export class GridLoader extends React.Component<ReactSpinners.GridLoaderProps> {}
export class HashLoader extends React.Component<ReactSpinners.HashLoaderProps> {}
export class MoonLoader extends React.Component<ReactSpinners.MoonLoaderProps> {}
export class PacmanLoader extends React.Component<ReactSpinners.PacmanLoaderProps> {}
export class PropagateLoader extends React.Component<ReactSpinners.PropagateLoaderProps> {}
export class PulseLoader extends React.Component<ReactSpinners.PulseLoaderProps> {}
export class RingLoader extends React.Component<ReactSpinners.RingLoaderProps> {}
export class RiseLoader extends React.Component<ReactSpinners.RiseLoaderProps> {}
export class RotateLoader extends React.Component<ReactSpinners.RotateLoaderProps> {}
export class ScaleLoader extends React.Component<ReactSpinners.ScaleLoaderProps> {}
export class SyncLoader extends React.Component<ReactSpinners.SyncLoaderProps> {}
