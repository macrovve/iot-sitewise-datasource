import React, { PureComponent } from 'react';
import { SitewiseQuery } from '../types';
import { InlineField } from '@grafana/ui';
import { SitewiseQueryEditorProps } from './types';
import { AssetPropPickerRows } from './AssetPropPickerRows';

type Props = SitewiseQueryEditorProps<SitewiseQuery>;

export class PropertyValueHistoryEditor extends PureComponent<Props> {
  render() {
    return (
      <>
        <AssetPropPickerRows {...this.props} />
        <div className="gf-form">
          <InlineField label="????" labelWidth={10} grow={true}>
            <div>HISTORY fields...</div>
          </InlineField>
        </div>
      </>
    );
  }
}